import React from 'react';
import Footer from './Footer';
import Form from './Form/Form';
import Header from './Header';

const Test = () => {
  const active = true;
  if (active) {
    return <p>Está funcionando!</p>;
  } else {
    return <p>Está desligado</p>;
  }
};

const App = () => {
  return (
    <>
      <Header />
      <Test />
      <Form />
      App
      <Footer />
    </>
  );
};

export default App;
