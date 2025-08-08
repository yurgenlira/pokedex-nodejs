import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonList from './PokemonList.jsx';
import PokemonPage from './PokemonPage.jsx';
import ErrorMessage from './ErrorMessage.jsx';
import LoadingSpinner from './LoadingSpinner.jsx';



const App = () => (
  <>
    <Router>
      <Routes>
        <Route path='/' element={<PokemonList />} />
        <Route path='/pokemon/:name' element={<PokemonPage />} />
        <Route path='*' element={<ErrorMessage message='Page not found' />} />
      </Routes>
    </Router>
    <footer>Pokémon and Pokémon character names are trademarks of Nintendo.</footer>
  </>
);

export default App;
