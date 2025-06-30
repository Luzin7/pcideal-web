Este é o frontend do [Pc Ideal](https://www.pcideal.online), uma plataforma que gera recomendações personalizadas de builds de computadores com base em orçamento, preferências de CPU/GPU e uso pretendido do usuário.

Esse projeto foi configurado utilizando [Confectus](https://www.npmjs.com/package/confectus).

## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Configuração do Projeto](#configuração-do-projeto)
- [Execução da Aplicação](#execução-da-aplicação)
- [Estrutura do Projeto](#estrutura-do-projeto)

---

## Tecnologias Utilizadas

- **Frontend**: Next.js, TypeScript
- **Estilização**: Tailwind CSS
- **Ícones**: Lucide

## Pré-requisitos

- Node.js v22.11 ou superior
- bun ou npm

## Configuração do Projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/Luzin7/pcideal-web.git
cd pcideal-web
```

2. **Instale as dependências:**

```bash
bun i
# ou
npm i
```

3. **Configure as variáveis de ambiente:**

- Copie o arquivo `.env.example` para `.env` e substitua da forma que achar melhor os valores. Deixei os valores padrões para que seja mais fácil a experiência de teste local.

## Execução da Aplicação

- **Modo desenvolvimento:**

  ```bash
  bun run dev
  # ou
  npm run dev
  ```

- **Modo produção:**

  ```bash
  bun run build
  bun run start
  # ou
  npm run build
  npm start
  ```

A aplicação estará disponível em `http://localhost:3000` (ou na porta que você substituiu no seu `.env`).

## Estrutura do Projeto

```
pcideal/
├─ .vscode/
│  └─ settings.json
├─ app/
├─ components/
├─ env/
├─ helpers/
├─ hooks/
├─ lib/
├─ public/
├─ services/
│  ├─ pcIdeal-api/
│  │  ├─ models/
│  │  ├─ modules/
│  │  ├─ client.ts
│  │  └─ index.ts
│  └─ utils/
└─ styles/

```

**Principais pastas e responsabilidades:**

- **app/**: Páginas principais da aplicação.
- **components/**: Componentes reutilizáveis da interface.
- **env/**: Configurações de ambiente.
- **helpers/**: Funções auxiliares específicas para a aplicação.
- **hooks/**: Custom hooks do React para lógica reutilizável.
- **lib/**: Bibliotecas internas ou integrações específicas.
- **public/**: Arquivos estáticos públicos (imagens, fontes, etc.).
- **services/**: Serviços da aplicação, incluindo chamadas API e lógica de negócio.
  - **pcIdeal-api/**: Módulo específico da API pcIdeal, com suas próprias subpastas para modelos e módulos.
  - **utils/**: Utilitários específicos para serviços.
- **styles/**: Arquivos de estilos globais ou modulares.

---
