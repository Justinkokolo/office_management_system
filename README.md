# Office Management System

Smarter Britain platform

## Pre-requisites

To work with this repository, you will need the following installed on your system:

- [Node.js + NPM](https://nodejs.org/en/)
- [VS Code](https://code.visualstudio.com/download)
- [Git](https://git-scm.com/downloads)

## Getting set up

To set the theme up on your machine, install the project dependencies by running:

```bash
npm install
```

## Running the app

To run the app, run:

```bash
npm run dev
```

This will start a NextJS development server and make it accessible at localhost:3000, where you'll be able to interact with the app.

## Tech Stack + Features

### Frameworks

- [Next.js](https://nextjs.org/) – React framework for building performant apps with the best developer experience
- [Auth.js](https://authjs.dev/) – Handle user authentication with ease with providers like Google, Twitter, GitHub, etc.
- [Prisma](https://www.prisma.io/) – Typescript-first ORM for Node.js

### UI

- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for rapid UI development
- [Radix](https://www.radix-ui.com/) – Primitives like modal, popover, etc. to build a stellar user experience
- [Framer Motion](https://framer.com/motion) – Motion library for React to animate components with ease
- [React Icons](https://www.npmjs.com/package/react-icons) – All the icons
- [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) – Optimize custom fonts and remove external network requests for improved performance
- [`ImageResponse`](https://beta.nextjs.org/docs/api-reference/image-response) – Generate dynamic Open Graph images at the edge
- [`react-wrap-balancer`](https://github.com/shuding/react-wrap-balancer) – Simple React component that makes titles more readable

### Hooks and Utilities

- `useLocalStorage` – Persist data in the browser's local storage

### Code Quality

- [TypeScript](https://www.typescriptlang.org/) – Static type checker for end-to-end typesafety
- [Prettier](https://prettier.io/) – Opinionated code formatter for consistent code style
- [ESLint](https://eslint.org/) – Pluggable linter for Next.js and TypeScript
