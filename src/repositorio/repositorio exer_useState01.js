import React, { useState } from 'react';
import Produto from './Produto';

const App = () => {
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(null);

  async function handleClick(event) {
    setCarregando(true);
    const res = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    );
    const json = await res.json();
    setDados(json);
    setCarregando(false);
  }

  return (
    <div>
      <button style={{ margin: '0.2rem' }} onClick={handleClick}>
        Notebook
      </button>
      <button style={{ margin: '0.2rem' }} onClick={handleClick}>
        Smartphone
      </button>
      <button style={{ margin: '0.2rem' }} onClick={handleClick}>
        Tablet
      </button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </div>
  );
};

export default App;

// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
