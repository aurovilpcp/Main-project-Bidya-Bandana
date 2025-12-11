# React 19 + Vite + TypeScript

Minimal React 19 starter with Vite, TypeScript, and Tailwind CSS.

## Stack

- React 19.2.0
- Vite 7.1.9
- TypeScript 5.6.3
- Tailwind CSS 4.1.14
- Wouter (routing)
- React Query
- Lucide React (icons)

## Getting Started

Install dependencies:
```bash
npm install
```

Start development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## Project Structure

```
.
├── src/
│   ├── lib/
│   │   └── utils.ts       # Utility functions (cn helper)
│   ├── App.tsx            # Main app component with routing
│   ├── index.css          # Tailwind imports
│   └── main.tsx           # App entry point
├── index.html             # HTML template
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
└── vite.config.ts         # Vite config
```
