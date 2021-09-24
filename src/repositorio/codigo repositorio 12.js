import React, { useState, useEffect } from 'react';
import Produto from './Produto';

const App = () => {
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    if (produtoLocal !== null) setProduto(produtoLocal);
    //console.log(produtoLocal);
  }, []);

  useEffect(() => {
    if (produto !== null) window.localStorage.setItem('produto', produto);
  }, [produto]);

  function handleClick({ target }) {
    setProduto(target.innerText);
    console.log(target.innerText);
  }

  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button onClick={handleClick} style={{ marginRight: '1rem' }}>
        Notebook
      </button>
      <button onClick={handleClick} style={{ marginRight: '1rem' }}>
        Smartphone
      </button>
      <button onClick={handleClick} style={{ marginRight: '1rem' }}>
        Camera
      </button>
      <Produto produto={produto} />
    </div>
  );
};

export default App;
