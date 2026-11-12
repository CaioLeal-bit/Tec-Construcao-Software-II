import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { PerfilScreenProps } from '../navigation/types';
import { authService } from '../services/authService';
import { cores } from '../styles/theme';

export default function PerfilScreen({ navigation, route }: PerfilScreenProps) {
  // Obtém o usuário autenticado na sessão atual ou fallback seguro
  const usuarioLogado = authService.obterUsuarioLogado();
  const nome: string = usuarioLogado?.nome ?? route.params?.nome ?? 'Estudante EstudaAê';
  const email: string = usuarioLogado?.email ?? route.params?.email ?? 'aluno@estudaae.com';

  function sair() {
    // Limpa a sessão e o token JWT em memória
    authService.logout();

    // Redefine a navegação para voltar à tela de Login
    navigation.getParent()?.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  }

  return (
    <View style={styles.container}>
      {/* Avatar do perfil com iniciais */}
      <View style={styles.avatar}>
        <Text style={styles.avatarTexto}>
          {nome
            .split(' ')
            .map((p) => p[0])
            .slice(0, 2)
            .join('')
            .toUpperCase()}
        </Text>
      </View>

      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.email}>{email}</Text>

      {/* Cartão informativo com dados da conta e autenticação */}
      <View style={styles.cardInfo}>
        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>Plano:</Text>
          <Text style={styles.infoValor}>Estudante Premium</Text>
        </View>
        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>Autenticação:</Text>
          <Text style={[styles.infoValor, { color: cores.sucesso }]}>Token JWT Ativo</Text>
        </View>
        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>Perfil:</Text>
          <Text style={styles.infoValor}>Aluno</Text>
        </View>
      </View>

      {/* Botão de Logout */}
      <TouchableOpacity style={styles.botaoSair} onPress={sair} activeOpacity={0.8}>
        <Text style={styles.botaoSairTexto}>SAIR DA CONTA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundo,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    gap: 12,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: cores.primaria,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    shadowColor: cores.primaria,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  avatarTexto: {
    color: cores.branco,
    fontSize: 32,
    fontWeight: 'bold',
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: cores.texto,
  },
  email: {
    fontSize: 14,
    color: cores.cinza,
    marginBottom: 10,
  },
  cardInfo: {
    width: '100%',
    backgroundColor: cores.superficie,
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: cores.borda,
    gap: 10,
  },
  infoLinha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoLabel: {
    color: cores.cinza,
    fontSize: 14,
  },
  infoValor: {
    color: cores.texto,
    fontSize: 14,
    fontWeight: '600',
  },
  botaoSair: {
    marginTop: 16,
    width: '100%',
    height: 50,
    borderRadius: 12,
    backgroundColor: cores.perigo,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoSairTexto: {
    color: cores.branco,
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 0.5,
  },
});
