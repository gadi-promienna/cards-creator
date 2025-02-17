import React from 'react';
import './App.css';
import Routing from './Routing';
import { ListsContextProvider } from './context/Lists';
import { CardsContextProvider } from './context/Cards';
function App() {
  return (
    <ListsContextProvider>
      <CardsContextProvider>
        <Routing />
      </CardsContextProvider>
    </ListsContextProvider>
  )
}

export default App;
