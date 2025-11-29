import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20, // compensa o translucent status bar
  },

  header: {
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 30,
  },

  iconCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.3)',
  },

  titleLarge: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFF',
    textAlign: 'center',
    lineHeight: 36,
  },

  subtitle: {
    marginTop: 12,
    fontSize: 16,
    color: '#EEE',
    textAlign: 'center',
    lineHeight: 24,
    opacity: 0.95,
  },

  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginHorizontal: 24,
    marginTop: -26,
    borderRadius: 18,
    paddingHorizontal: 20,
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 25,
    elevation: 12,
  },

  input: {
    flex: 1,
    fontSize: 17,
    color: '#333',
    paddingVertical: 0,
  },

  button: {
    marginHorizontal: 24,
    marginTop: 20,
    height: 60,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
  },

  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },

  // Área que cresce e empurra o conteúdo certo
  contentArea: {
    flex: 1,
    marginTop: 30,
  },

  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },

  questionCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255,255,255,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 8,
  },

  questionMark: {
    fontSize: 64,
    color: '#7468F0',
    fontWeight: '200',
  },

  emptyText: {
    fontSize: 17,
    color: '#FFF',
    textAlign: 'center',
    lineHeight: 26,
    opacity: 0.9,
  },

  /* Home / Index styles (migrated from index.tsx) */
  crystalBall: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: 'rgba(255,255,255,0.12)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 6,
    borderColor: 'rgba(255,255,255,0.22)',
    shadowColor: '#8B5CF6',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 18,
    elevation: 18,
  },

  smoke1: { position: 'absolute', width: 110, height: 110, borderRadius: 55, backgroundColor: 'rgba(200,132,252,0.18)' },
  smoke2: { position: 'absolute', width: 90, height: 90, borderRadius: 45, backgroundColor: 'rgba(139,92,246,0.2)' },

  title: { fontSize: 34, fontWeight: '900', color: '#FFFFFF', textAlign: 'center', marginTop: 20 },
  subtitleAlt: { fontSize: 18, color: '#F3E8FF', textAlign: 'center', fontStyle: 'italic', marginTop: 10, marginBottom: 30 },

  inputContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.08)', marginHorizontal: 30, borderRadius: 30, paddingHorizontal: 20, height: 56, borderWidth: 1, borderColor: 'rgba(255,255,255,0.12)' },
  inputAlt: { flex: 1, color: '#FFF', fontSize: 18, marginLeft: 12 },

  buttonAlt: { marginHorizontal: 40, marginTop: 30, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.45, shadowRadius: 20, elevation: 20 },
  buttonTextAlt: { color: '#FFF', fontSize: 20, fontWeight: '700' },

  loadingText: { color: '#F3E8FF', fontSize: 20, fontStyle: 'italic', textAlign: 'center', marginBottom: 20 },

  revelationTitle: { fontSize: 28, fontWeight: '900', color: '#FFFFFF', textAlign: 'center', marginVertical: 30 },
  oracleCard: { backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 20, padding: 20, marginBottom: 20, borderWidth: 1, borderColor: 'rgba(255,255,255,0.08)' },
  oracleText: { color: '#FFFFFF', fontSize: 18, lineHeight: 28, marginTop: 12 },
  highlight: { fontWeight: '800', color: '#E9D5FF', fontSize: 22 },
  countryText: { color: '#D8B4FF', fontSize: 18, fontWeight: '600' },
  finalWords: { fontSize: 22, color: '#FFFFFF', textAlign: 'center', marginTop: 40, fontStyle: 'italic', fontWeight: '700' },
  emptyTextAlt: { color: '#F3E8FF', fontSize: 18, fontStyle: 'italic', marginTop: 20 },

  /* History list */
  historyContainer: { flex: 1, padding: 20, backgroundColor: '#FFFFFF' },
  historyItem: { paddingVertical: 12, paddingHorizontal: 14, borderRadius: 10, backgroundColor: '#F3F4F6', marginBottom: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  historyText: { fontSize: 16, color: '#111827' },
  historyEmpty: { fontSize: 16, color: '#6B7280', textAlign: 'center', marginTop: 40 },
  historyHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  clearButton: { paddingHorizontal: 12, paddingVertical: 8, backgroundColor: '#EF4444', borderRadius: 8 },
  clearButtonText: { color: '#FFF', fontWeight: '700' },

  historyHeaderMystic: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 12,
  },
  historyTitle: {
    fontSize: 26,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  historyEmptyMystic: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  historyEmptyText: {
    fontSize: 19,
    color: '#E0AAFF',
    textAlign: 'center',
    marginTop: 24,
    lineHeight: 30,
    fontStyle: 'italic',
  },

  // Item da lista
  historyItemMystic: {
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    borderRadius: 20,
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.18)',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 10,
  },

  crystalIconSmall: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(224, 170, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    borderWidth: 1.5,
    borderColor: 'rgba(224, 170, 255, 0.4)',
  },

  crystalBallSmall: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255,255,255,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.3)',
    shadowColor: '#C084FC',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 25,
    elevation: 20,
  },

  historyItemText: {
    fontSize: 19,
    color: '#FFFFFF',
    fontWeight: '600',
    flex: 1,
  },

  reuseText: {
  color: '#C084FC',
  fontSize: 20,
  fontWeight: 'bold',
},

  /* SOBRE - ESTILOS MÍSTICOS */
  aboutCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    borderRadius: 24,
    padding: 24,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 12,
  },
  aboutTitle: {
    fontSize: 26,
    fontWeight: '900',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: '#C084FC',
    textShadowRadius: 10,
  },
  aboutSection: {
    fontSize: 18,
    fontWeight: '800',
    color: '#E0AAFF',
    marginTop: 20,
    marginBottom: 8,
  },
  aboutText: {
    fontSize: 16,
    color: '#E9D5FF',
    lineHeight: 26,
    textAlign: 'justify',
  },
  aboutFooter: {
    marginTop: 30,
    fontSize: 14,
    color: '#C084FC',
    textAlign: 'center',
    fontStyle: 'italic',
    opacity: 0.9,
  },

});



export default globalStyles;