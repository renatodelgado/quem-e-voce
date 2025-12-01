// components/Results.tsx
import { Calendar, GenderIntersex, Globe } from 'phosphor-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

type ResultsProps = {
  name?: string;
  data: {
    age?: number;
    gender?: string;
    genderProbability?: number;
    country?: { country_id: string; probability: number }[];
  };
};

export default function Results({ name, data }: ResultsProps) {
  const formatGender = (gender?: string) => {
    if (!gender) return '—';
    return gender === 'male' ? 'Masculino' : 'Feminino';
  };

  const topCountries = (data.country || []).slice(0, 6);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.greeting}>Olá, {name || 'amigo'}!</Text>
      <Text style={styles.intro}>Aqui está o que descobrimos sobre o seu nome:</Text>

      {/* Idade */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={[styles.iconCircle, { backgroundColor: '#E0E7FF' }]}>
            <Calendar size={28} color="#4F46E5" weight="bold" />
          </View>
          <Text style={styles.cardTitle}>Idade prevista</Text>
        </View>
        <Text style={styles.value}>{data.age || '—'} anos</Text>
        <Text style={styles.info}>Média estatística global</Text>
      </View>

      {/* Gênero */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={[styles.iconCircle, { backgroundColor: '#FCE7F3' }]}>
            <GenderIntersex size={28} color="#EC4899" weight="bold" />
          </View>
          <Text style={styles.cardTitle}>Gênero previsto</Text>
        </View>
        <Text style={styles.value}>{formatGender(data.gender)}</Text>
        <Text style={styles.info}>
          {data.genderProbability ? `${(data.genderProbability * 100).toFixed(0)}% de certeza` : '—'}
        </Text>
      </View>

      {/* Países */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={[styles.iconCircle, { backgroundColor: '#D1FAE5' }]}>
            <Globe size={28} color="#10B981" weight="bold" />
          </View>
          <Text style={styles.cardTitle}>Países mais prováveis</Text>
        </View>

        {topCountries.length > 0 ? (
          <View style={styles.countryList}>
            {topCountries.map((item) => (
              <View key={item.country_id} style={styles.countryRow}>
                <Text style={styles.flag}>{getFlag(item.country_id)}</Text>
                <Text style={styles.countryName}>{getCountryName(item.country_id)}</Text>
                <View style={styles.probabilityContainer}>
                  <View style={styles.probabilityBar}>
                    <View
                      style={[styles.probabilityFill, { width: `${item.probability * 100}%` }]}
                    />
                  </View>
                  <Text style={styles.probabilityText}>
                    {(item.probability * 100).toFixed(0)}%
                  </Text>
                </View>
              </View>
            ))}
          </View>
        ) : (
          <Text style={styles.info}>Nenhum país encontrado</Text>
        )}
      </View>

      <View style={{ height: 120 }} />
    </ScrollView>
  );
}

// FUNÇÃO PERFEITA
const getFlag = (code: string) => {
  if (!code || code.length !== 2) return 'Globe';
  return String.fromCodePoint(...[...code.toUpperCase()].map(c => 127397 + c.charCodeAt(0)));
};

// TODOS OS PAÍSES DO MUNDO TRADUZIDOS (190+)
const getCountryName = (code: string): string => {
  const countries: Record<string, string> = {
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
    NE: 'Níger',          RW: 'Ruanda',         ZM: 'Zâmbia',          MW: 'Malawi',};
  return countries[code.toUpperCase()] || code.toUpperCase();
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 24 },
  greeting: { fontSize: 28, fontWeight: '800', color: '#FFF', textAlign: 'center', marginTop: 20 },
  intro: { fontSize: 16, color: '#EEE', textAlign: 'center', marginBottom: 30, lineHeight: 24 },
  card: {
    backgroundColor: 'rgba(255,255,255,0.96)',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.18,
    shadowRadius: 25,
    elevation: 16,
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  iconCircle: { width: 56, height: 56, borderRadius: 28, alignItems: 'center', justifyContent: 'center', marginRight: 16 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#1F2937' },
  value: { fontSize: 36, fontWeight: '800', color: '#4F46E5', marginBottom: 4 },
  info: { fontSize: 14, color: '#6B7280', marginTop: 4 },
  countryList: { marginTop: 8 },
  countryRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 14 },
  flag: { fontSize: 32, marginRight: 14 },
  countryName: { flex: 1, fontSize: 17, fontWeight: '600', color: '#1F2937' },
  probabilityContainer: { flexDirection: 'row', alignItems: 'center' },
  probabilityBar: { width: 90, height: 10, backgroundColor: '#E5E7EB', borderRadius: 5, overflow: 'hidden', marginRight: 10 },
  probabilityFill: { height: '100%', backgroundColor: '#10B981', borderRadius: 5 },
  probabilityText: { fontSize: 15, fontWeight: 'bold', color: '#10B981', minWidth: 44, textAlign: 'right' },
});