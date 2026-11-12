import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HomeScreenProps } from '../navigation/types';
import { authService } from '../services/authService';
import { cores } from '../styles/theme';

interface CursoItem {
  id: string;
  titulo: string;
  categoria: string;
  nivel: string;
  duracao: string;
  aulas: number;
}

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const insets = useSafeAreaInsets();
  const usuarioLogado = authService.obterUsuarioLogado();
  const saudacao = usuarioLogado?.nome ? `Olá, ${usuarioLogado.nome}!` : 'Olá, Estudante!';
  const iniciais = usuarioLogado?.nome
    ? usuarioLogado.nome.slice(0, 2).toUpperCase()
    : 'AL';

  // Cursos simulados do banco da plataforma EstudaAê
  const cursosDisponiveis: CursoItem[] = [
    {
      id: '1',
      titulo: 'React Native & Expo',
      categoria: 'Mobile',
      nivel: 'Iniciante',
      duracao: '12h',
      aulas: 24,
    },
    {
      id: '2',
      titulo: 'NestJS & TypeScript API',
      categoria: 'Backend',
      nivel: 'Intermediário',
      duracao: '18h',
      aulas: 32,
    },
    {
      id: '3',
      titulo: 'Modelagem com Prisma & PostgreSQL',
      categoria: 'Banco de Dados',
      nivel: 'Avançado',
      duracao: '8h',
      aulas: 16,
    },
    {
      id: '4',
      titulo: 'Arquitetura Limpa em Node.js',
      categoria: 'Arquitetura',
      nivel: 'Avançado',
      duracao: '15h',
      aulas: 28,
    },
  ];

  return (
    <View style={styles.tela}>
      {/* BLOCO 1: Cabeçalho Fixo (Saudação + Avatar) */}
      <View style={[styles.cabecalho, { paddingTop: insets.top > 0 ? insets.top + 8 : 56 }]}>
        <View>
          <Text style={styles.saudacao}>{saudacao}</Text>
          <Text style={styles.subtitulo}>Pronto para aprender hoje?</Text>
        </View>

        {/* Toque no avatar direciona para a aba Perfil */}
        <TouchableOpacity
          style={styles.avatar}
          onPress={() => navigation.navigate('Perfil', { nome: usuarioLogado?.nome ?? 'Aluno EstudaAê' })}
          activeOpacity={0.8}
        >
          <Text style={styles.avatarTexto}>{iniciais}</Text>
        </TouchableOpacity>
      </View>

      {/* BLOCO 2: Conteúdo Rolável (flex: 1) */}
      <ScrollView
        style={styles.scrollConteudo}
        contentContainerStyle={styles.conteudo}
        showsVerticalScrollIndicator={false}
      >
        {/* Cards de Resumo: Métricas do Aluno */}
        <View style={styles.linhaCards}>
          <View style={[styles.cardResumo, { backgroundColor: cores.primaria }]}>
            <Text style={styles.cardValor}>3</Text>
            <Text style={styles.cardRotulo}>Cursos Ativos</Text>
          </View>
          <View style={[styles.cardResumo, { backgroundColor: cores.sucesso }]}>
            <Text style={styles.cardValor}>18</Text>
            <Text style={styles.cardRotulo}>Aulas Concluídas</Text>
          </View>
        </View>

        {/* Seção: Continue Assistindo */}
        <Text style={styles.secaoTitulo}>Continue Assistindo</Text>
        <View style={styles.cardProgresso}>
          <View style={styles.badgeCategoria}>
            <Text style={styles.badgeTexto}>Mobile</Text>
          </View>
          <Text style={styles.cursoAndamentoTitulo}>React Native com TypeScript</Text>
          <Text style={styles.cursoAndamentoAula}>Módulo 2: Componentes Nativos e Flexbox</Text>

          {/* Barra de Progresso com porcentagem */}
          <View style={styles.barraProgressoContainer}>
            <View style={styles.progressoTrilho}>
              <View style={[styles.progressoPreenchido, { width: '65%' }]} />
            </View>
            <Text style={styles.progressoTexto}>65%</Text>
          </View>

          <TouchableOpacity
            style={styles.botaoRetomar}
            onPress={() => Alert.alert('Sala de Aula', 'Retomando a aula selecionada...')}
          >
            <Text style={styles.botaoRetomarTexto}>Retomar Aula</Text>
          </TouchableOpacity>
        </View>

        {/* Seção: Cursos Disponíveis */}
        <Text style={styles.secaoTitulo}>Catálogo de Cursos</Text>
        <View style={styles.gradeCursos}>
          {cursosDisponiveis.map((curso: CursoItem) => (
            <TouchableOpacity
              key={curso.id}
              style={styles.cardCurso}
              activeOpacity={0.8}
              onPress={() => Alert.alert(curso.titulo, `Carga: ${curso.duracao} | ${curso.aulas} aulas`)}
            >
              <View style={styles.cabecalhoCardCurso}>
                <View style={styles.tagCategoria}>
                  <Text style={styles.tagCategoriaTexto}>{curso.categoria}</Text>
                </View>
                <Text style={styles.nivelTexto}>{curso.nivel}</Text>
              </View>

              <Text style={styles.cursoTitulo} numberOfLines={2}>
                {curso.titulo}
              </Text>

              <View style={styles.cursoRodape}>
                <Text style={styles.cursoInfo}>{curso.duracao}</Text>
                <Text style={styles.cursoInfo}>•</Text>
                <Text style={styles.cursoInfo}>{curso.aulas} aulas</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: cores.fundo,
  },
  cabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 56,
    paddingBottom: 16,
    backgroundColor: cores.superficie,
    borderBottomWidth: 1,
    borderBottomColor: cores.borda,
  },
  saudacao: {
    fontSize: 22,
    fontWeight: 'bold',
    color: cores.texto,
  },
  subtitulo: {
    fontSize: 13,
    color: cores.cinza,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: cores.primaria,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarTexto: {
    color: cores.branco,
    fontWeight: 'bold',
    fontSize: 16,
  },
  scrollConteudo: {
    flex: 1,
  },
  conteudo: {
    padding: 20,
    gap: 16,
    paddingBottom: 24,
  },
  linhaCards: {
    flexDirection: 'row',
    gap: 12,
  },
  cardResumo: {
    flex: 1,
    padding: 18,
    borderRadius: 14,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  cardValor: {
    color: cores.branco,
    fontSize: 26,
    fontWeight: 'bold',
  },
  cardRotulo: {
    color: cores.branco,
    fontSize: 13,
    opacity: 0.9,
    marginTop: 2,
  },
  secaoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: cores.texto,
    marginTop: 6,
  },
  cardProgresso: {
    backgroundColor: cores.superficie,
    padding: 18,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: cores.borda,
    gap: 10,
  },
  badgeCategoria: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(6, 182, 212, 0.15)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeTexto: {
    color: cores.destaque,
    fontSize: 12,
    fontWeight: '600',
  },
  cursoAndamentoTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: cores.texto,
  },
  cursoAndamentoAula: {
    fontSize: 13,
    color: cores.cinza,
  },
  barraProgressoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 4,
  },
  progressoTrilho: {
    flex: 1,
    height: 6,
    backgroundColor: cores.borda,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressoPreenchido: {
    height: '100%',
    backgroundColor: cores.primaria,
    borderRadius: 3,
  },
  progressoTexto: {
    fontSize: 12,
    color: cores.cinza,
    fontWeight: 'bold',
  },
  botaoRetomar: {
    backgroundColor: cores.primaria,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 4,
  },
  botaoRetomarTexto: {
    color: cores.branco,
    fontWeight: 'bold',
    fontSize: 14,
  },
  gradeCursos: {
    gap: 12,
  },
  cardCurso: {
    backgroundColor: cores.superficie,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: cores.borda,
    gap: 8,
  },
  cabecalhoCardCurso: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tagCategoria: {
    backgroundColor: 'rgba(99, 102, 241, 0.15)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  tagCategoriaTexto: {
    color: cores.primaria,
    fontSize: 11,
    fontWeight: 'bold',
  },
  nivelTexto: {
    color: cores.cinza,
    fontSize: 11,
  },
  cursoTitulo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: cores.texto,
  },
  cursoRodape: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },
  cursoInfo: {
    color: cores.cinza,
    fontSize: 12,
  },
});
