// Centralização de cores e tema da plataforma EstudaAê
export const cores = {
  fundo: '#0f172a',          // Dark blue background principal
  superficie: '#1e293b',     // Fundo dos cards e contêineres
  superficieHover: '#334155', // Bordas e divisores
  primaria: '#6366f1',       // Índigo/Roxo destaque principal
  primariaHover: '#4f46e5',  // Índigo mais escuro para estados ativos
  destaque: '#06b6d4',       // Ciano para badges e destaques
  sucesso: '#10b981',        // Verde para progresso e aprovações
  alerta: '#f59e0b',         // Laranja para avisos
  perigo: '#ef4444',         // Vermelho para erros e saídas
  texto: '#f8fafc',          // Texto principal (quase branco)
  cinza: '#94a3b8',          // Texto secundário e placeholders
  branco: '#ffffff',
  borda: '#334155',
} as const;

export type CoresTipo = typeof cores;

