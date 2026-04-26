# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start        # dev server at http://localhost:3000
npm test         # run tests in interactive watch mode
npm test -- --watchAll=false   # run tests once (CI mode)
npm test -- --testPathPattern=App   # run a single test file
npm run build    # production build to build/
```

## Architecture

Standard Create React App (React 19) with no ejection. Entry point is `src/index.js`, which mounts `src/App.js` into `#root`. Tests use `@testing-library/react` with Jest (configured via `react-scripts`).

ESLint config extends `react-app` and `react-app/jest` — configured in `package.json`, no separate config file.
