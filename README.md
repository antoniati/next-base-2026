# Template Base Next.js 2026 — Resumo Arquitetural

Segue um **resumo técnico, objetivo e consolidado** do que foi definido e implementado neste **template base 2026**. Este documento serve como **referência arquitetural** para você no futuro e como **guia de onboarding** caso outro dev encoste no projeto.

---

## Objetivo do template

Criar um **repositório base reutilizável**, moderno e previsível para múltiplos produtos (SaaS, e-commerce, webapps), com foco em:

* Alta produtividade
* Forte tipagem
* Separação clara de responsabilidades
* Facilidade de refatoração
* Escala sem degradação arquitetural

---

## Stack base

* **Next.js 15+ / App Router**
* **Node runtime + Turbopack**
* **TypeScript strict**
* **React 19**
* **TailwindCSS**
* **pnpm**
* **Prisma**
* **PostgreSQL**
* **NextAuth v5 (beta)**
* **React Query**
* **Zod**
* **Resend**
* **bcryptjs**

---

## Organização de código (Feature-first)

```
features/
  <feature>/
    schemas/      # Zod – contratos de entrada/saída
    services/     # Regra de negócio (server-only)
    actions/      # Orquestração (Server Actions)
    hooks/        # Client hooks (React Query)
    ui/           # Componentes isolados
```

**Regras**

* Nenhuma regra de negócio fora de `services`
* Nenhum acesso ao banco fora de `repo / lib/server`
* Server Actions não contêm lógica
* UI nunca acessa Prisma, Session ou Env

---

## Autenticação & Sessão

### NextAuth v5

* Configuração centralizada
* `auth()` como única API de sessão
* Adapter Prisma
* Sessão sempre resolvida no servidor
* Client consome sessão via Server Action

### Guards

* **Middleware**: apenas redirect (leve)
* **Server**: guard real (`requireSession`, `requireUser`)
* **Service**: nunca assume permissão implícita

---

## Data Access

* Prisma isolado em `lib/server/db`
* Client singleton (dev-safe)
* Repositórios cuidam apenas de persistência
* Services operam sobre domínio, não infra

---

## Result Pattern & Erros

### Result Pattern

```ts
Result<T, AppError>
```

* Nenhum `throw` em service
* Nenhum `try/catch` em UI
* Server Actions apenas encapsulam

### AppError

* Códigos estáveis
* Mensagens técnicas
* UX mapeada no client
* Logs desacoplados da UI

---

## Cache & React Query

### Query Keys

* Factory centralizada
* Sem keys inline
* Sempre tipadas (`as const`)

### Reads

* Server Actions idempotentes
* Cache por sessão
* `staleTime` explícito

### Writes

* Invalidação explícita
* Nada de `invalidateQueries()` genérico
* Optimistic update com rollback

### Regras

* RSC → fetch direto
* Client → React Query
* Cache limpo ao trocar sessão

---

## Environment & Config

* `env.ts` com Zod
* Falha rápida ao subir app
* Nada de `process.env` direto
* Client env separado quando necessário

---

## Infra & DX

### Lint / TypeScript

* ESLint Next + TypeScript
* TS strict
* Paths configurados (`@/*`)
* Zero erro tolerado em CI

### Formatting

* Prettier
* EditorConfig
* LF padronizado

---

## Middleware

* Guard leve por rota
* Sem DB
* Sem fetch
* Sem lógica de domínio

---

## Prisma

* Schema base (User)
* Seed inicial
* Script padronizado
* Client singleton

---

## CI

* GitHub Actions
* Lint
* Typecheck
* Build fora do template base

---

## Princípios que guiam o template

* **Explícito > implícito**
* **Contrato > convenção**
* **Erro como dado**
* **Cache previsível**
* **Sessão server-first**
* **Feature isolada**
* **Infra não vaza**

---

## Uso recomendado

* Este repo **não deve ser alterado** após finalizado
* Sempre clonar para novos projetos
* Evoluções só retornam ao template se forem genéricas
* Features específicas nunca entram aqui

---

## Status

✅ Template **finalizado**
✅ Arquitetura estável para iniciar 2026+
