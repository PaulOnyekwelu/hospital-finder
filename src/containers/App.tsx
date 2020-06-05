import React from 'react';
import Header from '../components/header';

const customStyles = {
  body: {
    background: 'hsl(210, 10%, 62%)',
    width: '100vw',
    height: '100vh',
  }
}

const App = ():JSX.Element => 
    <main style={customStyles.body}>
      <Header />
    </main>

export default App;
