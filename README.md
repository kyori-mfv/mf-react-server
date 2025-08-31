# React Server Side Rendering (SSR)

A learning project exploring how to build a React server framework similar to Next.js from scratch.

## Overview

This project demonstrates the fundamental concepts and implementation patterns used in modern React server frameworks by building a simplified version from the ground up. The goal is to understand how Next.js works under the hood by implementing key features step by step.

## Learning Goals

- **Server-Side Rendering (SSR)**: Implement React SSR with hydration
- **File-Based Routing**: Build automatic routing based on file structure
- **Route Manifest System**: Create a build-time route discovery and manifest generation

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
├── src/
│   ├── pages/           # File-based routes (like Next.js pages/)
│   │   ├── index.tsx    # Home page (/)
│   │   ├── about.tsx    # About page (/about)
│   │   ├── blog.tsx     # Blog page (/blog)
│   │   ├── contact.tsx  # Contact page (/contact)
│   │   └── dashboard/   # Nested routes
│   │       ├── index.tsx    # Dashboard home (/dashboard)
│   │       └── stats.tsx    # Dashboard stats (/dashboard/stats)
│   ├── router/          # Routing system
│   │   ├── manifest-router.ts    # Route resolution logic
│   │   └── routes-manifest.json  # Generated route manifest
│   ├── types/           # TypeScript definitions
│   ├── app.tsx          # Root App component
│   └── client.tsx       # Client-side hydration entry
├── scripts/
│   └── discover-pages.js    # Build-time route discovery
├── public/              # Static assets and client bundles
├── server.tsx           # Express server with SSR
├── webpack.client.config.js  # Client bundle configuration
└── webpack.server.config.js  # Server bundle configuration
```

## Architecture

This framework implements a Next.js-like architecture with:

1. **File-based routing**: Pages in `/src/pages` automatically become routes
2. **Build-time route discovery**: Scripts scan pages and generate route manifests
3. **Universal rendering**: Server renders initial HTML, client hydrates for interactivity
4. **Code splitting**: Each page becomes a separate client bundle for optimal loading
5. **TypeScript support**: Full type safety across server and client code

## Development Commands

- `npm run dev` - Build and start development server
- `npm run build` - Build client and server bundles
- `npm run start` - TypeScript type checking
- `npm run format` - Prettier code formatting
- `npm run validate` - ESLint code linting

This is an educational project focused on understanding the internals of React server frameworks like Next.js by building them from scratch.
