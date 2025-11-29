// services/getNameInfo.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const CACHE_KEY = '@name_cache';
const ONE_DAY = 24 * 60 * 60 * 1000;

interface CachedData {
  [name: string]: {
    data: any;
    timestamp: number;
  };
}

export async function getNameInfo(name: string): Promise<any | null> {
  const normalizedName = name.toLowerCase();

  try {
    // 1. Tenta pegar do cache
    const cached = await AsyncStorage.getItem(CACHE_KEY);
    if (cached) {
      const parsed: CachedData = JSON.parse(cached);
      const cachedEntry = parsed[normalizedName];
      if (cachedEntry && Date.now() - cachedEntry.timestamp < ONE_DAY) {
        console.log('Usando cache para:', name);
        return cachedEntry.data;
      }
    }

    // 2. Busca na API (sem chave, sem limite rígido)
    const [ageRes, genderRes, natRes] = await Promise.all([
      axios.get(`https://api.agify.io?name=${normalizedName}`),
      axios.get(`https://api.genderize.io?name=${normalizedName}`),
      axios.get(`https://api.nationalize.io?name=${normalizedName}`)
    ]);

    const result = {
      age: ageRes.data.age,
      gender: genderRes.data.gender,
      genderProbability: genderRes.data.probability,
      country: natRes.data.country || []
    };

    // 3. Salva no cache
    const newCache: CachedData = cached ? JSON.parse(cached) : {};
    newCache[normalizedName] = {
      data: result,
      timestamp: Date.now()
    };
    
    // Limita cache a 200 nomes
    const keys = Object.keys(newCache);
    if (keys.length > 200) {
      const oldestKey = keys.sort((a, b) => newCache[a].timestamp - newCache[b].timestamp)[0];
      delete newCache[oldestKey];
    }

    await AsyncStorage.setItem(CACHE_KEY, JSON.stringify(newCache));

    return result;

  } catch (error: any) {
    if (error.response?.status === 429) {
      console.log('429 detectado, usando cache ou fallback');
      // Mesmo com erro, tenta usar cache antigo
      const cached = await AsyncStorage.getItem(CACHE_KEY);
      if (cached) {
        const cache = JSON.parse((await AsyncStorage.getItem('name_cache')) || '{}');
cache[normalizedName] = cache[normalizedName] || null;
        if (cache[normalizedName]) {
          console.log('Usando cache antigo para:', name);
          return cache[normalizedName].data;
        }
await AsyncStorage.setItem('name_cache', JSON.stringify(cache));
      }
    }
    console.log('Erro na API:', error.message);
    return null;
  }
}