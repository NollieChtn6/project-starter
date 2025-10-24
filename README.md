# Project Starter Template

This repository serves as a **starter template** for full-stack TypeScript projects using a monorepo structure with `pnpm` workspaces.

It includes **both frontend and backend setups** with standard tooling and best practices out of the box.

---

## Monorepo

- Workspace structure with `apps/frontend` and `apps/backend`
- Centralized dependency management using `pnpm`

### Backend

- Node.js + TypeScript
- `ts-node-dev` for development server
- `Vitest` for unit testing and coverage
- Linting with `Biome`
- Type checking with `tsc`

## Frontend

- Vite + React + TypeScript
- `Vitest` for unit testing
- Linting with `Biome`
- Type checking with `tsc`
- Development server with hot reload

## Developer Experience

- Pre-configured **Git hooks** for linting/staging
- Scripts for building, testing, linting, and type-checking
- CI-ready: lint, type-check, build, and test jobs
- Easy code coverage reporting with `Vitest`
