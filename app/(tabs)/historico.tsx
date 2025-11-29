// screens/Historico.tsx
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { useFocusEffect, useRouter } from 'expo-router';
import { ArrowLeft, Sparkle, Trash } from 'phosphor-react-native';
import React, { useCallback, useState } from 'react';
import { Alert, FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import globalStyles from '../../styles/global';

export default function Historico() {
  const [history, setHistory] = useState<string[]>([]);
  const router = useRouter();

  useFocusEffect(
    useCallback(() => {
      const loadHistory = async () => {
        try {
          const raw = await AsyncStorage.getItem('search_history');
          if (raw) {
            const parsed = JSON.parse(raw) as string[];
            setHistory(parsed.reverse()); // mais recente primeiro
          } else {
            setHistory([]);
          }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (e) {
          setHistory([]);
        }
      };
      loadHistory();
    }, [])
  );

  const clearHistory = async () => {
    Alert.alert("Apagar tudo?", "Os espíritos esquecerão todos os nomes...", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Apagar",
        style: "destructive",
        onPress: async () => {
          await AsyncStorage.removeItem('search_history');
          setHistory([]);
        },
      },
    ]);
  };

  const reuseName = (name: string) => {
    // FORÇA UMA NOVA INSTÂNCIA DA TELA HOME COM PARAMS LIMPOS
    router.replace({
      pathname: '/',
      params: { selectedName: name, timestamp: Date.now() } // timestamp força nova renderização
    });
  };

  return (
    <>
      <LinearGradient colors={['#4C1D95', '#7C3AED', '#C084FC']} style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={globalStyles.historyHeaderMystic}>
            <TouchableOpacity onPress={() => router.back()}>
              <ArrowLeft size={32} color="#FFF" weight="bold" />
            </TouchableOpacity>
            <Text style={globalStyles.historyTitle}>Nomes Revelados</Text>
            <TouchableOpacity onPress={clearHistory} disabled={history.length === 0}>
              <Trash size={28} color={history.length === 0 ? '#666' : '#FF6B6B'} weight="bold" />
            </TouchableOpacity>
          </View>

          {history.length === 0 ? (
            <View style={globalStyles.historyEmptyMystic}>
              <Sparkle size={80} color="#E0AAFF" weight="duotone" />
              <Text style={globalStyles.historyEmptyText}>
                Nenhum nome foi sussurrado aos espíritos ainda...
              </Text>
            </View>
          ) : (
            <FlatList
              data={history}
              keyExtractor={(item) => item + Math.random()} // garante key única
              contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 10, paddingBottom: 40 }}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => reuseName(item)}
                  activeOpacity={0.75}
                  style={globalStyles.historyItemMystic}
                >
                  <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                    <View style={globalStyles.crystalIconSmall}>
                      <Sparkle size={20} color="#E0AAFF" weight="fill" />
                    </View>
                    <Text style={globalStyles.historyItemText}>{item}</Text>
                  </View>
                  <Text style={globalStyles.reuseText}>→</Text>
                </TouchableOpacity>
              )}
            />
          )}
        </SafeAreaView>
      </LinearGradient>
    </>
  );
}