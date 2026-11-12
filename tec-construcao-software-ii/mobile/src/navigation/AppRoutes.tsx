import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import TabRoutes from './TabRoutes';
import { RootStackParamList } from './types';
import { cores } from '../styles/theme';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundColor: cores.superficie },
        headerTintColor: cores.texto,
        headerTitleStyle: { fontWeight: 'bold' },
        contentStyle: { backgroundColor: cores.fundo },
      }}
    >
      {/* 1) Login: sem cabeçalho padrão pois já possui logo e título próprios */}
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />

      {/* 2) Registro: com cabeçalho nativo e seta de retorno automática */}
      <Stack.Screen
        name="Registro"
        component={RegisterScreen}
        options={{ title: 'Cadastro de Aluno' }}
      />

      {/* 3) Principal: Navegador de Abas aninhado (sem cabeçalho duplo) */}
      <Stack.Screen
        name="Principal"
        component={TabRoutes}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

