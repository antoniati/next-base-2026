// Regras:

// Sempre função

// Sempre as const

// Parâmetro explícito

// Nada de string "mágica" espalhada

export const queryKeys = {
  auth: {
    session: () => ["auth", "session"] as const,
  },

  users: {
    me: () => ["users", "me"] as const,
    byId: (id: string) => ["users", id] as const,
  },

  orders: {
    list: (filters?: unknown) => ["orders", filters] as const,
    byId: (id: string) => ["orders", id] as const,
  },
};
