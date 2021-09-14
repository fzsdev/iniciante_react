import React from 'react';
import Header from './Header';
import Home from './Home';
import Products from './Produtos';

const App = () => {
  const { pathname } = window.location;
  let Pagina = Home;
  console.log(pathname);
  if (pathname === '/produtos') {
    Pagina = Products;
  } else {
    Pagina = Home;
  }

  return (
    <section>
      <Header />
      <Pagina />
    </section>
  );
};

export default App;
