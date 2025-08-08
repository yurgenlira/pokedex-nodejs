# Project Overview
This project is a web application that serves as a Pokédex, allowing users to browse and view information about different Pokémon. It is built using React for the frontend and uses Webpack for module bundling. The application fetches Pokémon data from an external API and displays it in a user-friendly interface.

## Folder Structure
- src: Contains the source code for the React frontend, including components, styles, and utility hooks.
- test: Contains Jest test files for React components.
  - App.jest.spec.jsx: Tests the main App component, ensuring routing and overall app logic work as expected.
  - PokemonList.jest.spec.jsx: Tests the PokemonList component, verifying that Pokémon are listed and rendered correctly.
  - PokemonPage.jest.spec.jsx: Tests the PokemonPage component, checking that detailed Pokémon information is displayed properly.
- .github/workflows: Contains CI/CD configuration files for GitHub Actions.

## Libraries and Frameworks
- React for building the user interface.
- Webpack for bundling JavaScript and assets.
- Jest for testing React components.

## Coding Standards
- Use semicolons at the end of each statement.
- Use single quotes for strings.
- Use function-based components in React.
- Use arrow functions for callbacks and event handlers.

## UI Guidelines
- The application should have a clean and modern design.
- Loading spinners and error messages are displayed to enhance user experience.
- Pokémon are listed with the ability to view more details about each one.

## GUI
- The main page displays a list of Pokémon.
- Each Pokémon can be clicked to view its details on a separate page.
- The application should be responsive and work well on both desktop and mobile devices.
- Use images in example folder as GUI reference.
