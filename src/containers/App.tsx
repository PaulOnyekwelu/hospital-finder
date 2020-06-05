import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

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
      <Footer />
    </main>

export default App;
