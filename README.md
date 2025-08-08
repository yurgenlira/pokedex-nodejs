# Pokédex React App
[![Node.js CI](https://github.com/yurgenlira/pokedex-nodejs/actions/workflows/nodejs.yml/badge.svg?branch=main)](https://github.com/yurgenlira/pokedex-nodejs/actions/workflows/nodejs.yml)

A modern, responsive Pokédex web application built with React. Browse and view information about the first 151 Pokémon, including stats, abilities, and images. The app fetches data from the public PokéAPI and provides a clean, user-friendly interface.

## Features
- List and search the first 151 Pokémon
- View detailed stats, abilities, and images for each Pokémon
- Navigation between Pokémon (Previous/Next)
- Responsive design for desktop and mobile
- Loading spinners and error messages for better UX
- Built with React, React Router, and Webpack
- Unit tested with Jest and Testing Library
- Linting with ESLint

## Getting Started

### Prerequisites
- Node.js (v22.x recommended)
- npm

### Installation
```bash
npm install
```

### Development
```bash
npm start
```
The app will be available at `http://localhost:8080` by default.

### Build
```bash
npm run build
```

### Testing
```bash
npm test
```

### Linting
```bash
npm run eslint
```

## Project Structure
- `src/` - React components, hooks, and styles
- `test/` - Jest test files for components
- `.github/workflows/` - CI configuration for GitHub Actions

## CI/CD
This project uses GitHub Actions for continuous integration. On every push or pull request to `main`, the following will run:
- Install dependencies
- Lint the codebase
- Build the app
- Run tests

See `.github/workflows/nodejs.yml` for details.

## Credits
- [PokéAPI](https://pokeapi.co/) for Pokémon data
- [React](https://reactjs.org/), [Jest](https://jestjs.io/), [ESLint](https://eslint.org/)

## License
MIT
