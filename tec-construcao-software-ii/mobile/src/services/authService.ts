import { requisicaoApi } from './api';

export interface RespostaLogin {
  access_token: string;
}

export interface UsuarioCriado {
  id: string;
  nomeCompleto: string;
  email: string;
  perfil: string;
}

// Armazenamento em memória do token e do usuário da sessão atual
let tokenEmMemoria: string | null = null;
let usuarioEmMemoria: { email: string; nome: string } | null = null;

export const authService = {
  // Autenticação via POST /auth/login (DTO: email e password)
  async login(email: string, password: string): Promise<RespostaLogin> {
    const dados = await requisicaoApi<RespostaLogin>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email: email.trim(),
        password: password,
      }),
    });

    tokenEmMemoria = dados.access_token;
    usuarioEmMemoria = {
      email: email.trim(),
      nome: email.split('@')[0], // Nome amigável inicial a partir do e-mail
    };

    return dados;
  },

  // Cadastro de novo estudante via POST /usuarios (DTO: nomeCompleto, email, senha, perfil)
  async cadastrar(nomeCompleto: string, email: string, senha: string): Promise<UsuarioCriado> {
    return requisicaoApi<UsuarioCriado>('/usuarios', {
      method: 'POST',
      body: JSON.stringify({
        nomeCompleto: nomeCompleto.trim(),
        email: email.trim(),
        senha: senha,
        perfil: 'ALUNO',
      }),
    });
  },

  obterToken(): string | null {
    return tokenEmMemoria;
  },

  obterUsuarioLogado() {
    return usuarioEmMemoria;
  },

  logout(): void {
    tokenEmMemoria = null;
    usuarioEmMemoria = null;
  },
};

