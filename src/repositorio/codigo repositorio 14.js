import React, { useState, useRef } from 'react';

const App = () => {
  const [carrinho, setCarrinho] = useState(0);
  const [notify, setNotify] = useState(null);
  const timeoutRef = useRef();

  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotify('Adicionado ao carrinho');
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotify(null);
    }, 1500);
  }

  return (
    <div>
      <p>{notify}</p>
      <button onClick={handleClick}>Adicionar ao carrinho {carrinho}</button>
    </div>
  );
};

export default App;
