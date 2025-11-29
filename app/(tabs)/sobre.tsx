// screens/Sobre.tsx
import { LinearGradient } from 'expo-linear-gradient';
import { MotiView } from 'moti';
import { Sparkle } from 'phosphor-react-native';
import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import globalStyles from '../../styles/global';

export default function Sobre() {
  return (
    <>
      <LinearGradient colors={['#4C1D95', '#7C3AED', '#C084FC']} style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>

            {/* Título com brilho */}
            <View style={{ alignItems: 'center', marginTop: 40, marginBottom: 30 }}>
              <MotiView
                from={{ scale: 0.9, opacity: 0.7 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ loop: true, duration: 5000 }}
              >
                <Sparkle size={56} color="#E0AAFF" weight="fill" />
              </MotiView>
              <Text style={globalStyles.title}>Sobre o Oráculo</Text>
              <Text style={globalStyles.subtitleAlt}>
                A verdade por trás da névoa...
              </Text>
            </View>

            {/* Card místico */}
            <View style={globalStyles.aboutCard}>
              <Text style={globalStyles.aboutTitle}>O Projeto</Text>
              <Text style={globalStyles.aboutText}>
                &quot;Quem é você?&quot; é um oráculo digital criado por <Text style={globalStyles.highlight}>Renato Delgado</Text> para a disciplina Coding Mobile da Faculdade Senac-PE, ministrada pelo prof. Geraldo Júnior.
              </Text>
              <Text style={globalStyles.aboutText}>
                Este app demonstra o poder de combinar fontes públicas de dados para revelar segredos escondidos em um simples nome.
              </Text>

              <Text style={globalStyles.aboutSection}>Como funciona</Text>
              <Text style={globalStyles.aboutText}>
                Consulto os espíritos das APIs públicas (agify.io, genderize.io, nationalize.io) que guardam estatísticas de milhões de nomes ao redor do mundo. Os resultados são apenas ecos probabilísticos — nunca certezas absolutas.
              </Text>

              <Text style={globalStyles.aboutSection}>Tecnologias usadas</Text>
              <Text style={globalStyles.aboutText}>
                React Native • Expo • TypeScript • Phosphor Icons • AsyncStorage • Moti • LinearGradient
              </Text>

              <Text style={globalStyles.aboutSection}>Privacidade</Text>
              <Text style={globalStyles.aboutText}>
                Nenhum dado pessoal é enviado a servidores meus. Tudo permanece no seu dispositivo. O histórico é guardado apenas localmente, como segredos sussurrados ao vento.
              </Text>

              <Text style={globalStyles.aboutSection}>Contato</Text>
              <Text style={globalStyles.aboutText}>
                Autor: <Text style={globalStyles.highlight}>Renato Delgado</Text>{'\n'}
                Email: renato.delgado@edu.pe.senac.br / rena7o.delgado@gmail.com
              </Text>

              <Text style={globalStyles.aboutFooter}>
                Renato Delgado • Todos os direitos reservados • FacSenac-PE • 2025
              </Text>
            </View>

            <View style={{ alignItems: 'center', marginTop: 60 }}>
              <MotiView
                from={{ rotate: '0deg' }}
                animate={{ rotate: '360deg' }}
                transition={{ loop: true, duration: 40000, type: 'timing' }}
              >
                <View style={globalStyles.crystalBallSmall}>
                  <MotiView
                    from={{ rotate: '0deg' }}
                    animate={{ rotate: '-360deg' }}
                    transition={{ loop: true, duration: 50000 }}
                    style={globalStyles.smoke1}
                  />
                  <MotiView
                    from={{ rotate: '360deg' }}
                    animate={{ rotate: '0deg' }}
                    transition={{ loop: true, duration: 60000 }}
                    style={globalStyles.smoke2}
                  />
                  <Sparkle size={40} color="#FFFFFF" weight="fill" />
                </View>
              </MotiView>

              <Text style={{ 
                marginTop: 30, 
                fontSize: 17, 
                color: '#E0AAFF', 
                fontStyle: 'italic',
                textAlign: 'center',
                opacity: 0.9
              }}>
                O véu do tempo nunca se fecha por completo...
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
}