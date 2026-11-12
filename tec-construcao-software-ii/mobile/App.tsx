import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import AppRoutes from './src/navigation/AppRoutes';

export default function App() {
  return (
    // NavigationContainer gerencia todo o estado da árvore de rotas (apenas 1 por app)
    <NavigationContainer>
      <AppRoutes />
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
