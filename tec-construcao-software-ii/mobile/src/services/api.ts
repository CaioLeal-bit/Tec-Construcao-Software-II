import Constants from 'expo-constants';
import { Platform } from 'react-native';

// Obtém automaticamente o IP da máquina na rede local pelo Metro Bundler do Expo
const debuggerHost = Constants.expoConfig?.hostUri;
const ipHost = debuggerHost ? debuggerHost.split(':')[0] : '192.168.0.237';

// No navegador web usa localhost; no celular usa o IP da rede local
export const API_BASE_URL = Platform.OS === 'web'
  ? 'http://localhost:3000'
  : `http://${ipHost}:3000`;

export interface RespostaErro {
  message?: string | string[];
  statusCode?: number;
  error?: string;
}

export async function requisicaoApi<T>(
  endpoint: string,
  opcoes: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;

  const headersPadrao: HeadersInit = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    ...(opcoes.headers || {}),
  };

  try {
    const resposta = await fetch(url, {
      ...opcoes,
      headers: headersPadrao,
    });

    const dados = await resposta.json().catch(() => ({}));

    if (!resposta.ok) {
      let mensagem = 'Ocorreu um erro na requisição.';
      if (dados.message) {
        mensagem = Array.isArray(dados.message) ? dados.message.join('\n') : dados.message;
      }
      throw new Error(mensagem);
    }

    return dados as T;
  } catch (error: any) {
    if (error.message?.includes('Network request failed') || error.message?.includes('Failed to fetch')) {
      throw new Error(
        `Não foi possível conectar ao servidor NestJS em (${url}). Verifique se o backend está rodando no terminal com 'npm run start:dev'.`
      );
    }
    throw error;
  }
}

