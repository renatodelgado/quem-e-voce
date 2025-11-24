import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, FlatList } from "react-native";

export default function Resultado() {
  const params = useLocalSearchParams();
  const data = JSON.parse(params.data as string);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultado para: {params.name}</Text>

      {/* Idade */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Idade estimada</Text>
        <Text style={styles.value}>{data.age ?? "—"} anos</Text>
        <Text style={styles.info}>
          Baseado em {data.ageCount} registros.
        </Text>
      </View>

      {/* Gênero */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Gênero previsto</Text>
        <Text style={styles.value}>
          {data.gender ? (data.gender === "male" ? "Masculino" : "Feminino") : "—"}
        </Text>
        <Text style={styles.info}>
          Probabilidade: {(data.genderProbability * 100).toFixed(1)}%
        </Text>
      </View>

      {/* Países */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Nacionalidades Prováveis</Text>

        {data.countries.length === 0 ? (
          <Text style={styles.info}>Nenhum país encontrado.</Text>
        ) : (
          <FlatList
            data={data.countries}
            keyExtractor={(item) => item.country_id}
            renderItem={({ item }) => (
              <View style={styles.countryRow}>
                <Text style={styles.flag}>{item.country_id}</Text>
                <Text style={styles.countryText}>
                  {(item.probability * 100).toFixed(1)}%
                </Text>
              </View>
            )}
          />
        )}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF", padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },

  card: {
    backgroundColor: "#F8F8F8",
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
  },

  cardTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  value: { fontSize: 22, fontWeight: "bold", marginBottom: 5 },
  info: { fontSize: 14, color: "#666" },

  countryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
  },

  flag: { fontSize: 18 },
  countryText: {
    fontSize: 16,
    color: "#333",
  },
});
