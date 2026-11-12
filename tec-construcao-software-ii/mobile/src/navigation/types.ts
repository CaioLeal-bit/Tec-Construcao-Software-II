import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

// Tipagem dos parâmetros recebidos nas abas inferiores
export type TabParamList = {
  Início: undefined;
  Cursos: undefined;
  Progresso: undefined;
  Perfil: { nome?: string; email?: string } | undefined;
};

// Tipagem dos parâmetros da pilha de telas principais (Stack)
export type RootStackParamList = {
  Login: undefined;
  Registro: undefined;
  Principal: NavigatorScreenParams<TabParamList> | undefined;
};

// Props tipadas para cada tela
export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
export type RegisterScreenProps = NativeStackScreenProps<RootStackParamList, 'Registro'>;
export type HomeScreenProps = BottomTabScreenProps<TabParamList, 'Início'>;
export type PerfilScreenProps = BottomTabScreenProps<TabParamList, 'Perfil'>;

