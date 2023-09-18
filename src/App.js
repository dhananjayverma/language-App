import React from 'react';
import './App.css';
import LanguageSelector from './components/LanguageSelector';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <LanguageSelector />
      <Home />
      <About />
      <Contact/>
    </div>
  );
}

export default App;
