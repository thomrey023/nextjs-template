# Enterprise-Ready Next.js 15 Boilerplate & Architecture Template

A highly scalable, production-grade Next.js template engineered for performance, type safety, and clean separation of concerns. This boilerplate is designed to skip the initial setup friction and establish industry-standard architectural patterns from day one.

## 🚀 Key Architectural Features

- **Strict Type Safety**: Written 100% in TypeScript with robust module and API declaration boundaries.
- **Modern Monorepo/Workspace Ready**: Configured with `pnpm` workspaces for optimal dependency management and caching.
- **Component-Driven Architecture**: Integrated with `components.json` for modular, atomic UI design (Shadcn/ui & Tailwind CSS).
- **Linter & Code Quality**: Pre-configured with modular ESLint Flat Config (`eslint.config.mjs`) to enforce clean, predictable code patterns.
- **Optimized VSCode Workflow**: Includes targeted workspace configurations to align team formatting rules seamlessly.

## 📦 Tech Stack & Tools

- **Framework**: Next.js (App Router optimized)
- **Language**: TypeScript
- **Package Manager**: `pnpm`
- **Styling**: Tailwind CSS v4 via @tailwindcss/postcss pipeline
- **Code Quality**: ESLint (Flat Config)

## 🛠️ Getting Started

## 🔌 Recommended VS Code Extensions

To ensure unified code quality, formatting safety, and an optimal development workflow, it is highly recommended to install the following workspace extensions:

- 📝 **[Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)** — Enforces unified style and automated import/Tailwind class sorting.
- 🔍 **[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)** — Automated static analysis to catch syntax bugs and enforce strict code standards.
- 🎨 **[Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)** — Advanced autocompletion, class linting, and hover previews for Tailwind v4.
- ⚙️ **[Trigger Task on Save](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.triggertaskonsave)** — Automates compilation format hooks seamlessly on file save loops.
- 🌈 **[Indent Rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)** — Color-coded column indentations to ensure strict layout scannability.
- 💬 **[Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)** — Categorizes workspace tracking annotations into human-readable alerts (`TODO`, `FIXME`).
- 📁 **[Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=pkief.material-icon-theme)** — Production-grade file and directory icons for rapid navigation boundaries.

### 1. Installation

Clone the repository and install the dependencies using `pnpm`:

```bash
pnpm install
```

### 2. Development Server

Run the local development server:

```bash
pnpm dev
```

## 📐 Project Structure & Optimization

This template enforces a strict separation between presentation layers, business logic, and custom type wrappers:

- `src/` - Houses the core application views, layouts, and hooks.
- `types/` - Global, immutable TypeScript declarations to prevent type leaking across modules.
- `.vscode/` - Optional pre-configured development rules for immediate onboarding.
