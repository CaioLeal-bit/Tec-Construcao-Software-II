import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import PerfilScreen from '../screens/PerfilScreen';
import { TabParamList } from './types';
import { cores } from '../styles/theme';

const Tab = createBottomTabNavigator<TabParamList>();

// Tela simples reutilizada para as abas que serão desenvolvidas futuramente
function EmConstrucao({ route }: { route: { name: string } }) {
  return (
    <View style={styles.telaConstrucao}>
      <Ionicons name="construct-outline" size={48} color={cores.primaria} />
      <Text style={styles.textoConstrucao}>Aba "{route.name}" em desenvolvimento</Text>
      <Text style={styles.subtextoConstrucao}>Estará disponível nas próximas etapas do projeto.</Text>
    </View>
  );
}

// Mapa de ícones (Ionicons) para cada aba
const icones: Record<keyof TabParamList, keyof typeof Ionicons.glyphMap> = {
  Início: 'home',
  Cursos: 'book',
  Progresso: 'stats-chart',
  Perfil: 'person',
};

export default function TabRoutes() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: cores.primaria,
        tabBarInactiveTintColor: cores.cinza,
        tabBarStyle: {
          backgroundColor: cores.superficie,
          borderTopColor: cores.borda,
          borderTopWidth: 1,
          height: 60 + (insets.bottom > 0 ? insets.bottom : 8),
          paddingBottom: insets.bottom > 0 ? insets.bottom : 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        tabBarIcon: ({ focused, color, size }) => {
          const iconeNome = icones[route.name as keyof TabParamList];
          return (
            <Ionicons
              name={focused ? (iconeNome as any) : (`${iconeNome}-outline` as any)}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Início" component={HomeScreen} />
      <Tab.Screen name="Cursos" component={EmConstrucao} />
      <Tab.Screen name="Progresso" component={EmConstrucao} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  telaConstrucao: {
    flex: 1,
    backgroundColor: cores.fundo,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    gap: 12,
  },
  textoConstrucao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: cores.texto,
    textAlign: 'center',
  },
  subtextoConstrucao: {
    fontSize: 14,
    color: cores.cinza,
    textAlign: 'center',
  },
});

