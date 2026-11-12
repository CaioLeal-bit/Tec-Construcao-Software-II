import { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { RegisterScreenProps } from '../navigation/types';
import { authService } from '../services/authService';
import { cores } from '../styles/theme';

interface FormCadastro {
  nome: string;
  email: string;
  senha: string;
  confirmar: string;
}

export default function RegisterScreen({ navigation }: RegisterScreenProps) {
  const [form, setForm] = useState<FormCadastro>({
    nome: '',
    email: '',
    senha: '',
    confirmar: '',
  });
  const [carregando, setCarregando] = useState<boolean>(false);

  function alterar(campo: keyof FormCadastro, valor: string) {
    setForm((anterior) => ({ ...anterior, [campo]: valor }));
  }

  async function handleRegistrar() {
    if (!form.nome.trim() || !form.email.trim() || !form.senha || !form.confirmar) {
      Alert.alert('Atenção', 'Preencha todos os campos do formulário.');
      return;
    }

    if (form.senha.length < 6) {
      Alert.alert('Atenção', 'A senha deve conter no mínimo 6 caracteres.');
      return;
    }

    if (form.senha !== form.confirmar) {
      Alert.alert('Erro', 'As senhas informadas não conferem.');
      return;
    }

    try {
      setCarregando(true);
      Keyboard.dismiss();

      // Chamada HTTP real para a API NestJS (POST /usuarios)
      await authService.cadastrar(form.nome, form.email, form.senha);

      Alert.alert(
        'Conta criada!',
        'Seu cadastro como estudante foi concluído com sucesso. Agora faça o login com suas credenciais.',
        [
          {
            text: 'Ir para o Login',
            onPress: () => navigation.goBack(),
          },
        ]
      );
    } catch (error: any) {
      Alert.alert('Erro no Cadastro', error.message || 'Não foi possível cadastrar a conta.');
    } finally {
      setCarregando(false);
    }
  }

  return (
    // KeyboardAvoidingView: ajusta toda a tela automaticamente quando o teclado abre no iOS
    <KeyboardAvoidingView
      style={styles.tela}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.conteudo}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Cabeçalho */}
          <View style={styles.cabecalho}>
            <Text style={styles.titulo}>Criar Conta</Text>
            <Text style={styles.subtitulo}>Cadastre-se para ter acesso aos cursos do EstudaAê</Text>
          </View>

          {/* Inputs do Formulário */}
          <View style={styles.formulario}>
            <View style={styles.campoGrupo}>
              <Text style={styles.campoLabel}>Nome Completo</Text>
              <TextInput
                style={styles.input}
                placeholder="Ex: Carlos Eduardo"
                placeholderTextColor={cores.cinza}
                value={form.nome}
                onChangeText={(v: string) => alterar('nome', v)}
                editable={!carregando}
              />
            </View>

            <View style={styles.campoGrupo}>
              <Text style={styles.campoLabel}>E-mail</Text>
              <TextInput
                style={styles.input}
                placeholder="carlos@exemplo.com"
                placeholderTextColor={cores.cinza}
                keyboardType="email-address"
                autoCapitalize="none"
                value={form.email}
                onChangeText={(v: string) => alterar('email', v)}
                editable={!carregando}
              />
            </View>

            {/* Linha com Senha e Confirmar com flex: 1 (Etapa 5.3) */}
            <View style={styles.linhaCampos}>
              <View style={[styles.campoGrupo, styles.metade]}>
                <Text style={styles.campoLabel}>Senha</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Mín. 6 dígitos"
                  placeholderTextColor={cores.cinza}
                  secureTextEntry
                  value={form.senha}
                  onChangeText={(v: string) => alterar('senha', v)}
                  editable={!carregando}
                />
              </View>

              <View style={[styles.campoGrupo, styles.metade]}>
                <Text style={styles.campoLabel}>Confirmar</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Repita a senha"
                  placeholderTextColor={cores.cinza}
                  secureTextEntry
                  value={form.confirmar}
                  onChangeText={(v: string) => alterar('confirmar', v)}
                  editable={!carregando}
                />
              </View>
            </View>

            <TouchableOpacity
              style={[styles.botao, carregando && styles.botaoDesativado]}
              onPress={handleRegistrar}
              activeOpacity={0.8}
              disabled={carregando}
            >
              {carregando ? (
                <ActivityIndicator color={cores.branco} />
              ) : (
                <Text style={styles.botaoTexto}>CADASTRAR E ENTRAR</Text>
              )}
            </TouchableOpacity>
          </View>

          {/* Rodapé com link de retorno */}
          <View style={styles.rodape}>
            <Text style={styles.rodapeTexto}>Já tem uma conta? </Text>
            <TouchableOpacity onPress={() => navigation.goBack()} disabled={carregando}>
              <Text style={styles.link}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: cores.fundo,
  },
  scroll: {
    flex: 1,
  },
  conteudo: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 60, // Margem ampla para permitir rolagem confortável sobre o teclado
    gap: 20,
  },
  cabecalho: {
    gap: 6,
    marginTop: 8,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: cores.texto,
  },
  subtitulo: {
    fontSize: 14,
    color: cores.cinza,
  },
  formulario: {
    gap: 16,
  },
  campoGrupo: {
    gap: 6,
  },
  campoLabel: {
    fontSize: 13,
    color: cores.cinza,
    fontWeight: '500',
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
  linhaCampos: {
    flexDirection: 'row',
    gap: 12,
  },
  metade: {
    flex: 1,
  },
  botao: {
    height: 52,
    borderRadius: 12,
    backgroundColor: cores.primaria,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
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
    marginTop: 8,
    paddingBottom: 20,
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
