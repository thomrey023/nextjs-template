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
