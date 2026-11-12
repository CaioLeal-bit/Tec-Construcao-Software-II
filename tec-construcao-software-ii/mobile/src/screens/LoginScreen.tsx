import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ActivityIndicator,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { LoginScreenProps } from '../navigation/types';
import { authService } from '../services/authService';
import { cores } from '../styles/theme';

export default function LoginScreen({ navigation }: LoginScreenProps) {
  // Estados tipados dos campos do formulário
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [carregando, setCarregando] = useState<boolean>(false);

  async function handleLogin() {
    if (!email.trim() || !senha.trim()) {
      Alert.alert('Campos obrigatórios', 'Por favor, informe seu e-mail e senha.');
      return;
    }

    try {
      setCarregando(true);
      Keyboard.dismiss();

      // Chamada HTTP real para a API NestJS (POST /auth/login)
      await authService.login(email, senha);

      // Ao autenticar com sucesso, transiciona para a área logada passando os dados
      navigation.replace('Principal', {
        screen: 'Início',
      });
    } catch (error: any) {
      Alert.alert('Falha na autenticação', error.message || 'E-mail ou senha incorretos.');
    } finally {
      setCarregando(false);
    }
  }

  return (
    // KeyboardAvoidingView: empurra os campos para cima no iOS quando o teclado abre
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.scrollConteudo}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* BLOCO 1: Cabeçalho com Logo da Plataforma de Cursos */}
          <View style={styles.cabecalho}>
            <View style={styles.logo}>
              <Text style={styles.logoTexto}>E</Text>
            </View>
            <Text style={styles.titulo}>EstudaAê</Text>
            <Text style={styles.subtitulo}>Acesse sua conta para continuar aprendendo</Text>
          </View>

          {/* BLOCO 2: Formulário com Inputs e Botão */}
          <View style={styles.formulario}>
            <TextInput
              style={styles.input}
              placeholder="E-mail de estudante"
              placeholderTextColor={cores.cinza}
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
              editable={!carregando}
            />

            <TextInput
              style={styles.input}
              placeholder="Sua senha"
              placeholderTextColor={cores.cinza}
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
              editable={!carregando}
            />

            <TouchableOpacity
              style={styles.esqueciContainer}
              onPress={() => Alert.alert('Recuperar Senha', 'Link de recuperação enviado para o e-mail cadastrado.')}
            >
              <Text style={styles.esqueciTexto}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.botao, carregando && styles.botaoDesativado]}
              onPress={handleLogin}
              activeOpacity={0.8}
              disabled={carregando}
            >
              {carregando ? (
                <ActivityIndicator color={cores.branco} />
              ) : (
                <Text style={styles.botaoTexto}>ENTRAR COMO ALUNO</Text>
              )}
            </TouchableOpacity>
          </View>

          {/* BLOCO 3: Rodapé com link de navegação para cadastro */}
          <View style={styles.rodape}>
            <Text style={styles.rodapeTexto}>Ainda não tem conta? </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Registro')}
              disabled={carregando}
            >
              <Text style={styles.link}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundo,
  },
  scrollConteudo: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
    gap: 28,
  },
  cabecalho: {
    alignItems: 'center',
    gap: 8,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: cores.primaria,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    shadowColor: cores.primaria,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 8,
  },
  logoTexto: {
    color: cores.branco,
    fontSize: 38,
    fontWeight: 'bold',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: cores.texto,
  },
  subtitulo: {
    fontSize: 14,
    color: cores.cinza,
    textAlign: 'center',
  },
  formulario: {
    gap: 14,
  },
  input: {
    height: 52,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: cores.borda,
    backgroundColor: cores.superficie,
    color: cores.texto,
    fontSize: 15,
  },
  esqueciContainer: {
    alignSelf: 'flex-end',
    marginTop: -4,
  },
  esqueciTexto: {
    color: cores.destaque,
    fontSize: 13,
    fontWeight: '500',
  },
  botao: {
    height: 52,
    borderRadius: 12,
    backgroundColor: cores.primaria,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
    shadowColor: cores.primaria,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 4,
  },
  botaoDesativado: {
    opacity: 0.7,
  },
  botaoTexto: {
    color: cores.branco,
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 0.5,
  },
  rodape: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rodapeTexto: {
    color: cores.cinza,
    fontSize: 14,
  },
  link: {
    color: cores.destaque,
    fontWeight: 'bold',
    fontSize: 14,
  },
});
