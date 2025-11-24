import axios from "axios";

export async function getNameInfo(name: string) {
  try {
    const [agify, genderize, nationalize] = await Promise.all([
      axios.get(`https://api.agify.io/?name=${name}`),
      axios.get(`https://api.genderize.io/?name=${name}`),
      axios.get(`https://api.nationalize.io/?name=${name}`),
    ]);

    return {
      age: agify.data?.age ?? null,
      ageCount: agify.data?.count ?? 0,

      gender: genderize.data?.gender ?? null,
      genderProbability: genderize.data?.probability ?? 0,

      countries: nationalize.data?.country ?? [],
    };
  } catch (error) {
    console.log("Erro ao buscar dados:", error);
    return null;
  }
}
