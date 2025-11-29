/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
// screens/Home.tsx
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams } from 'expo-router';
import { AnimatePresence, MotiView } from 'moti';
import { CalendarDots, GenderIntersex, GlobeHemisphereWest, Sparkle, User } from 'phosphor-react-native';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { getNameInfo } from '../../services/getNameInfo';
import globalStyles from '../../styles/global';

export default function Home() {
  const [name, setName] = useState('');
  const [result, setResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
const { autoSearch, reuseName } = useLocalSearchParams();
const { selectedName, timestamp } = useLocalSearchParams();

  const mysticMessages = [
    "Os espíritos se aproximam...",
    "A névoa começa a se dissipar...",
    "Vejo uma luz no horizonte...",
    "As estrelas sussurram seu nome...",
    "A bola de cristal aquece em minhas mãos...",
    "Os ventos antigos trazem respostas...",
  ];

async function revealDestiny() {
  const trimmed = name.trim();
  if (!trimmed) return;

  setIsLoading(true);
  setResult(null);

  let i = 0;
  const interval = setInterval(() => {
    setLoadingMessage(mysticMessages[i % mysticMessages.length]);
    i++;
  }, 2000);

  try {
    const data = await getNameInfo(trimmed);

    if (data && (data.age || data.gender || (data.country && data.country.length > 0))) {
      setResult({ name: trimmed, ...data });

      // cache the result for faster future lookups
      try {
        const rawCache = await AsyncStorage.getItem('name_cache');
        const cache = rawCache ? JSON.parse(rawCache) : {};
        cache[trimmed.toLowerCase()] = { age: data.age, gender: data.gender, country: data.country };
        await AsyncStorage.setItem('name_cache', JSON.stringify(cache));
      } catch (e) {
        // ignore cache errors
      }

      // save history without duplicates
      try {
        const raw = await AsyncStorage.getItem('search_history');
        const arr = raw ? JSON.parse(raw) as string[] : [];
        const filtered = arr.filter((n) => n.toLowerCase() !== trimmed.toLowerCase());
        filtered.unshift(trimmed);
        const limited = filtered.slice(0, 50);
        await AsyncStorage.setItem('search_history', JSON.stringify(limited));
      } catch (e) {
        // ignore storage errors
      }
    } else {
      setResult(null);
    }
  } catch (e) {
    Alert.alert('Erro', 'Não foi possível consultar os espíritos. Tente novamente mais tarde.');
  } finally {
    clearInterval(interval);
    setIsLoading(false);
  }
}

useEffect(() => {
    if (selectedName && typeof selectedName === 'string') {
      setName('');
      setResult(null);
      setIsLoading(false);

      // Pequeno delay pra garantir limpeza total
      setTimeout(() => {
        setName(selectedName);
        
        // Primeiro tenta cache
        const tryCache = async () => {
          try {
            const raw = await AsyncStorage.getItem('name_cache');
            if (raw) {
              const cache = JSON.parse(raw);
              const key = selectedName.toLowerCase();
              if (cache[key]) {
                setResult({ name: selectedName, ...cache[key] });
                return;
              }
            }
          } catch {}
          
          // Se não achou no cache, busca na API
          setIsLoading(true);
          setTimeout(() => revealDestiny(), 400);
        };
        
        tryCache();
      }, 100);
    }
  }, [revealDestiny, selectedName, timestamp]);

  const getFlag = (code: string) => {
    if (!code || code.length !== 2) return '🌍';
    return String.fromCodePoint(...[...code.toUpperCase()].map(c => 127397 + c.charCodeAt(0)));
  };

  const getCountryName = (code: string) => {
    const map: Record<string, string> = {
      BR: 'Brasil',         PT: 'Portugal',       US: 'Estados Unidos',  AR: 'Argentina',
    MX: 'México',         ES: 'Espanha',        FR: 'França',          IT: 'Itália',
    GB: 'Reino Unido',    DE: 'Alemanha',       JP: 'Japão',           CN: 'China',
    RU: 'Rússia',         IN: 'Índia',          EG: 'Egito',           TR: 'Turquia',
    SA: 'Arábia Saudita', CO: 'Colômbia',       MA: 'Marrocos',        CA: 'Canadá',
    ZA: 'África do Sul',  DZ: 'Argélia',        NG: 'Nigéria',         NL: 'Países Baixos',
    PE: 'Peru',           PL: 'Polônia',        BE: 'Bélgica',         TN: 'Tunísia',
    ID: 'Indonésia',      AU: 'Austrália',      CL: 'Chile',           PH: 'Filipinas',
    IL: 'Israel',         BD: 'Bangladesh',     CZ: 'Tchéquia',        SY: 'Síria',
    YE: 'Iêmen',          OM: 'Omã',            CH: 'Suíça',           LY: 'Líbia',
    SE: 'Suécia',         IR: 'Irã',            HK: 'Hong Kong',       KW: 'Kuwait',
    KZ: 'Cazaquistão',    JO: 'Jordânia',       BO: 'Bolívia',         SG: 'Singapura',
    QA: 'Catar',          IE: 'Irlanda',        PK: 'Paquistão',       RO: 'Romênia',
    CM: 'Camarões',       AT: 'Áustria',        FI: 'Finlândia',       DK: 'Dinamarca',
    LB: 'Líbano',         GR: 'Grécia',         HU: 'Hungria',         GT: 'Guatemala',
    GH: 'Gana',           CR: 'Costa Rica',     VE: 'Venezuela',       NO: 'Noruega',
    AE: 'Emirados',       UY: 'Uruguai',        TH: 'Tailândia',       PA: 'Panamá',
    PS: 'Palestina',      EC: 'Equador',        UA: 'Ucrânia',         BH: 'Bahrein',
    TW: 'Taiwan',         KE: 'Quênia',         NZ: 'Nova Zelândia',   VN: 'Vietnã',
    RS: 'Sérvia',         HR: 'Croácia',        KR: 'Coreia do Sul',   AL: 'Albânia',
    SK: 'Eslováquia',     DO: 'Rep. Dominicana',PR: 'Porto Rico',      UG: 'Uganda',
    AZ: 'Azerbaijão',     LU: 'Luxemburgo',     CY: 'Chipre',          TZ: 'Tanzânia',
    AO: 'Angola',         MD: 'Moldávia',       SN: 'Senegal',         LV: 'Letônia',
    SI: 'Eslovênia',      ET: 'Etiópia',        IS: 'Islândia',        ZW: 'Zimbábue',
    MK: 'Macedônia',      MM: 'Mianmar',        GE: 'Geórgia',         JM: 'Jamaica',
    NA: 'Namíbia',        HT: 'Haiti',          BG: 'Bulgária',        KH: 'Camboja',
    BW: 'Botsuana',       MN: 'Mongólia',       BI: 'Burundi',         LS: 'Lesoto',
    TG: 'Togo',           FJ: 'Fiji',           MV: 'Maldivas',        SL: 'Serra Leoa',
    LR: 'Libéria',        GW: 'Guiné-Bissau',   GQ: 'Guiné Equatorial',
    CF: 'Rep. Centro-Africana',                 TD: 'Chade',           SO: 'Somália',
    DJ: 'Djibuti',        MR: 'Mauritânia',     ML: 'Mali',            BF: 'Burkina Faso',
    CG: 'Congo',          CD: 'Rep. Democrática do Congo',
    NE: 'Níger',          RW: 'Ruanda',         ZM: 'Zâmbia',          MW: 'Malawi',
    };
    return map[code.toUpperCase()] || code.toUpperCase();
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <LinearGradient colors={['#4C1D95', '#7C3AED', '#6D28D9']} style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
            {/* BOLA DE CRISTAL ANIMADA */}
            <View style={globalStyles.header}>
              <MotiView
                from={{ scale: 0.95, opacity: 0.8 }}
                animate={{ scale: 1.05, opacity: 1 }}
                transition={{ loop: true, duration: 6000 }}
                style={globalStyles.crystalBall}
              >
                <MotiView
                  from={{ rotate: '0deg' }}
                  animate={{ rotate: '360deg' }}
                  transition={{ loop: true, duration: 30000 }}
                  style={globalStyles.smoke1}
                />
                <MotiView
                  from={{ rotate: '360deg' }}
                  animate={{ rotate: '0deg' }}
                  transition={{ loop: true, duration: 40000 }}
                  style={globalStyles.smoke2}
                />
                <Sparkle size={60} color="#FFF" weight="fill" />
              </MotiView>

              <Text style={globalStyles.title}>Quem é você?</Text>
              <Text style={globalStyles.subtitleAlt}>Fale seu nome... e eu verei através do véu do tempo</Text>
            </View>

            {/* INPUT MÍSTICO */}
            <View style={globalStyles.inputContainer}>
              <User size={24} color="#EDE9FF" />
              <TextInput
                placeholder="Qual é o teu nome, viajante?"
                placeholderTextColor="#E9D5FF"
                style={globalStyles.inputAlt}
                value={name}
                onChangeText={setName}
                autoCapitalize="words"
              />
            </View>

            {/* BOTÃO COM BRILHO */}
            <TouchableOpacity onPress={revealDestiny} disabled={isLoading || !name.trim()}>
              <LinearGradient
                colors={name.trim() && !isLoading ? ['#C084FC', '#7C3AED'] : ['#555', '#777']}
                style={globalStyles.buttonAlt}
              >
                <Text style={globalStyles.buttonTextAlt}>
                  {isLoading ? 'Consultando os espíritos...' : 'Revelar meu destino'}
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* MENSAGENS DE CARREGAMENTO */}
            <AnimatePresence>
              {isLoading && (
                <MotiView
                  from={{ opacity: 0, translateY: 20 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  exit={{ opacity: 0 }}
                  style={{ alignItems: 'center', marginVertical: 40 }}
                >
                  <Text style={globalStyles.loadingText}>{loadingMessage}</Text>
                  <MotiView from={{ scale: 0.8 }} animate={{ scale: 1.2 }} transition={{ loop: true, duration: 2000 }}>
                    <Text style={{ fontSize: 60 }}>✨</Text>
                  </MotiView>
                </MotiView>
              )}
            </AnimatePresence>

            {/* RESULTADO MÍSTICO */}
            <AnimatePresence>
              {result && (
                <MotiView
                  from={{ opacity: 0, translateY: 50 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ type: 'spring', damping: 15 }}
                  style={{ paddingHorizontal: 20 }}
                >
                  <Text style={globalStyles.revelationTitle}>Os espíritos revelam...</Text>

                  {/* IDADE */}
                  {result.age && (
                    <View style={globalStyles.oracleCard}>
                      <CalendarDots size={32} color="#D8B4FE" weight="bold" />
                      <Text style={globalStyles.oracleText}>
                        Vejo que você já viveu cerca de <Text style={globalStyles.highlight}>{result.age}</Text> invernos nesta terra...
                      </Text>
                    </View>
                  )}

                  {/* GÊNERO */}
                  {result.gender && (
                    <View style={globalStyles.oracleCard}>
                      <GenderIntersex size={32} color="#F472B6" weight="bold" />
                      <Text style={globalStyles.oracleText}>
                        Sua alma carrega a energia do gênero <Text style={globalStyles.highlight}>
                          {result.gender === 'male' ? 'masculino' : 'feminino'}
                        </Text>
                        {result.genderProbability && ` com ${(result.genderProbability * 100).toFixed(0)}% de certeza nos ventos do destino.`}
                      </Text>
                    </View>
                  )}

                  {/* PAÍSES */}
                  {result.country && result.country.length > 0 && (
                    <View style={globalStyles.oracleCard}>
                      <GlobeHemisphereWest size={32} color="#6EE7B7" weight="bold" />
                      <Text style={globalStyles.oracleText}>
                        Seu nome ecoa com força em terras distantes... especialmente em:
                      </Text>
                      {result.country.slice(0, 5).map((c: any) => (
                        <View key={c.country_id} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12 }}>
                          <Text style={{ fontSize: 28, marginRight: 12 }}>{getFlag(c.country_id)}</Text>
                          <Text style={globalStyles.countryText}>
                            {getCountryName(c.country_id)} ({(c.probability * 100).toFixed(0)}%)
                          </Text>
                        </View>
                      ))}
                    </View>
                  )}

                  <Text style={globalStyles.finalWords}>
                    O destino está escrito nas estrelas, {result.name}... ✨
                  </Text>
                </MotiView>
              )}
            </AnimatePresence>

            {/* ESTADO VAZIO */}
            {!result && !isLoading && (
              <View style={{ alignItems: 'center', marginTop: 60 }}>
                <Text style={{ fontSize: 80, opacity: 0.25 }}>🌙</Text>
                <Text style={globalStyles.emptyTextAlt}>A bola de cristal aguarda um nome...</Text>
              </View>
            )}
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
}
