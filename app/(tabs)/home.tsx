import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { MagnifyingGlass, User } from "phosphor-react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useRouter } from "expo-router";
import { getNameInfo } from "../../services/getNameInfo";


export default function Home() {
  const [name, setName] = useState("");

  const router = useRouter();

  async function handleSearch() {
    if (!name) return;

    const result = await getNameInfo(name);

    router.push({
      pathname: "/resultado",
      params: {
        name,
        data: JSON.stringify(result),
      },
    });
  }


  return (

    <View style={styles.container}>
      {/* HEADER */}
      <LinearGradient
        colors={["#7468F0", "#B165F7"]}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.iconCircle}>
          <MagnifyingGlass size={40} color="#fff" weight="bold" />
        </View>

        <Text style={styles.title}>Quem é você pelo seu nome?</Text>
        <Text style={styles.subtitle}>
          Descubra idade, gênero e nacionalidade previstos pelo seu nome
        </Text>
      </LinearGradient>

      {/* INPUT */}
      <View style={styles.inputBox}>
        <User size={20} color="#999" style={{ marginRight: 8 }} />
        <TextInput
          placeholder="Digite um nome..."
          placeholderTextColor="#999"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
      </View>

      {/* BOTÃO */}
      <TouchableOpacity disabled={!name} onPress={handleSearch}>
        <LinearGradient
          colors={["#C084FC", "#60A5FA"]}
          style={[styles.button, !name && { opacity: 0.5 }]}
        >
          <Text style={styles.buttonText}>Descobrir</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* ESTADO INICIAL */}
      <View style={styles.emptyState}>
        <View style={styles.questionCircle}>
          <Text style={styles.questionMark}>?</Text>
        </View>
        <Text style={styles.emptyText}>
          Digite um nome para descobrir informações surpreendentes!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  header: {
    paddingTop: 60,
    paddingBottom: 40,
    alignItems: "center",
    paddingHorizontal: 20,
  },

  iconCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "rgba(255,255,255,0.25)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
  },

  subtitle: {
    marginTop: 8,
    fontSize: 14,
    color: "#EEE",
    textAlign: "center",
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 50,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },

  button: {
    marginHorizontal: 20,
    marginTop: 15,
    height: 50,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
  },

  emptyState: {
    marginTop: 50,
    alignItems: "center",
    paddingHorizontal: 30,
  },

  questionCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#F1F1F1",
    justifyContent: "center",
    alignItems: "center",
  },

  questionMark: {
    fontSize: 40,
    color: "#999",
  },

  emptyText: {
    marginTop: 15,
    fontSize: 15,
    color: "#666",
    textAlign: "center",
  },
});
