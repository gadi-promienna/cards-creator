import React from 'react';
import './App.css';
import Routing from './Routing';
import {BabiesContextProvider} from './context/Babies';

function App() {
  return (
    <BabiesContextProvider>
      <Routing />
    </BabiesContextProvider>
  )
}

export default App;
