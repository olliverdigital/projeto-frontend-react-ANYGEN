# MIDAS Locações & Serviços Ltda - Website Institucional

[![React](https://img.shields.io/badge/React-18.3-61DAFB.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC.svg)](https://tailwindcss.com/)

Site institucional moderno e otimizado para a **MIDAS Locações & Serviços Ltda**, especializada em manutenção industrial, energia solar e infraestrutura elétrica. Focado em **SEO**, **performance** e **conversão B2B**.

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- Node.js 18+
- pnpm (recomendado) ou npm

### Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd projeto-midas-final

# Instale as dependências
pnpm install

# Configure as variáveis de ambiente
cp .env.example .env

# Inicie o servidor de desenvolvimento
pnpm dev
```

Acesse no navegador: `http://localhost:5173`

---

## 🔧 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# Obrigatórias
VITE_WHATSAPP_NUMBER=5534998099418
VITE_CONTACT_EMAIL=contato@midas.com.br

# Opcionais
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

> **Nota**: Todas as variáveis devem começar com `VITE_` para serem acessíveis no código.

---

## 🛠 Tecnologias

| Categoria | Tecnologia |
|---|---|
| **Core** | React 18.3, TypeScript 5.7, Vite 7.3 |
| **Estilização** | Tailwind CSS 4, Shadcn/ui, Lucide React |
| **Roteamento** | React Router Dom v6 |
| **Formulários** | React Hook Form + Zod |
| **HTTP** | Axios |
| **SEO** | React Helmet Async, Schema Markup (JSON-LD) |
| **Utilitários** | clsx, tailwind-merge |

---

## 📂 Estrutura do Projeto

```
projeto-midas-final/
├── public/                  # Arquivos estáticos (robots.txt, sitemap.xml)
├── src/
│   ├── assets/              # Imagens (.webp, .jpg, .png)
│   ├── components/          # Componentes reutilizáveis
│   │   ├── ui/              # Componentes base (Shadcn)
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ContactForm.tsx
│   │   ├── InverterBrands.tsx
│   │   ├── Testimonials.tsx
│   │   ├── SEO.tsx
│   │   └── ImageOptimized.tsx
│   ├── pages/               # Páginas da aplicação
│   │   ├── Home.tsx          # Página principal com hero dinâmico
│   │   ├── Sobre.tsx         # Sobre com Missão/Visão/Valores
│   │   ├── Servicos.tsx      # Lista de serviços
│   │   ├── ServiceDetail.tsx # Detalhe de serviço (hero com background dinâmico)
│   │   ├── Emergencia.tsx    # Atendimento emergencial
│   │   ├── Contato.tsx       # Formulário de contato
│   │   ├── Blog.tsx          # Blog/conteúdo
│   │   └── NotFound.tsx      # Página 404
│   ├── data/
│   │   └── services.ts      # Dados dos serviços (inclui imagens de background)
│   ├── lib/                 # Configurações e utilitários
│   ├── hooks/               # Custom React hooks
│   ├── App.tsx              # Componente principal + rotas
│   ├── main.tsx             # Entry point
│   └── index.css            # Estilos globais e design tokens
├── .env.example
├── DEPLOYMENT.md
└── README.md
```

---

## 🎨 Personalização

### Cores da Marca

Configuradas em `src/index.css`:

- **Primary (Azul Industrial)**: `#003366`
- **Secondary (Dourado)**: `#D97706`
- **Dark**: `#1E293B`

### Tipografia

- **Headings**: Barlow (Google Fonts)
- **Body**: Inter (Google Fonts)

### Imagens dos Serviços

Cada serviço pode ter uma **imagem de background** no hero. Para alterar:

1. Coloque a nova imagem em `src/assets/`
2. Abra `src/data/services.ts`
3. Altere o caminho no `import` correspondente ou adicione um novo
4. Adicione a propriedade `backgroundImage` ao serviço desejado
5. Opcionalmente, use `backgroundPosition` para ajustar o enquadramento (ex: `'bottom'`, `'top'`, `'center'`)

```ts
// Exemplo em services.ts
import minhaBg from '@/assets/minha-imagem.webp'

{
  id: "meu-servico",
  backgroundImage: minhaBg,
  backgroundPosition: 'bottom', // opcional
  // ...
}
```

### Imagens das Páginas

Para trocar imagens em qualquer página (Home, Sobre, etc.):

1. Localize o `import` no topo do arquivo `.tsx`
2. Mude o caminho do arquivo para a nova imagem
3. Salve — a imagem atualiza automaticamente

```tsx
// Exemplo: trocar a imagem do hero na Home
import heroBg from '@/assets/nova-imagem.webp'
```

---

## 📦 Scripts Disponíveis

```bash
pnpm dev          # Servidor de desenvolvimento
pnpm build        # Build de produção (/dist)
pnpm preview      # Preview do build
pnpm lint         # Verifica código com ESLint
```

---

## 🚀 Deploy

### Build de Produção

```bash
pnpm build
```

O build será gerado na pasta `dist/`.

### Plataformas Recomendadas

- **Netlify** (Recomendado)
- **Vercel**
- **GitHub Pages**

Para instruções detalhadas, consulte [DEPLOYMENT.md](./DEPLOYMENT.md).

### Configuração de Rotas SPA

**Netlify** (`public/_redirects`):
```
/*    /index.html   200
```

**Vercel** (`vercel.json`):
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## ✨ Funcionalidades

- ✅ **Responsivo** — Mobile-first design
- ✅ **SEO Avançado** — Meta tags dinâmicas, Schema JSON-LD, sitemap, robots.txt
- ✅ **GEO Ready** — Estrutura otimizada para IAs (ChatGPT, Gemini, Perplexity)
- ✅ **Hero Dinâmico** — Imagens de background por serviço com overlay automático
- ✅ **Acessível** — ARIA labels, navegação por teclado
- ✅ **Performance** — Lazy loading de rotas, imagens WebP otimizadas
- ✅ **Formulário Validado** — React Hook Form + Zod + Formspree
- ✅ **Integração WhatsApp** — Botão flutuante e links diretos
- ✅ **Missão/Visão/Valores** — Seção estilizada com tema Industrial Premium
- ✅ **Marcas de Inversores** — Seção dedicada na página de Energia Solar

---

## 🐛 Troubleshooting

### Imagens não carregam

```tsx
// ✅ Correto — importar e usar a variável
import img from '@/assets/imagem.webp'
<img src={img} alt="Descrição" />

// ❌ Errado — caminho direto no src
<img src="/assets/imagem.webp" />
```

### Formulário não envia

1. Verifique `VITE_FORMSPREE_ENDPOINT` no `.env`
2. Confirme que o endpoint Formspree está ativo
3. Verifique o console do navegador

### Build falha

```bash
# Limpar cache e reinstalar
rm -rf node_modules pnpm-lock.yaml dist
pnpm install
pnpm build
```

---

## 📄 Licença

Este projeto é propriedade da **MIDAS Locações & Serviços Ltda**.

---

## 📞 Contato

- **WhatsApp**: (34) 99809-9418
- **Email**: contato@midas.com.br
- **Localização**: Rio Paranaíba — MG

---

Desenvolvido com foco em **performance**, **acessibilidade** e **conversão B2B**.
