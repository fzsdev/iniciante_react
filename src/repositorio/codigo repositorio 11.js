import React, { useEffect, useState } from 'react';
import Produto from './Produto';

const App = () => {
  const [ativo, setAtivo] = useState(false);

  /*  const [contar, setContar] = useState(0);
  const [dados, setDados] = useState(null);

  useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then(res => res.json())
      .then(json => setDados(json));
  }, []); */

  /*   useEffect(() => {
    console.log('Executado');
  }, [contar]);

  useEffect(() => {
    document.title = 'Total ' + contar;
  }, [contar]);
 */
  return (
    <div>
      <button onClick={() => setAtivo(!ativo)}>Ativar</button>
      {ativo && <Produto />}
    </div>

    /*  <div>
      {dados && (
        <div>
          <h1>{dados.nome}</h1>
          <p>R$ {dados.preco * contar}</p>
        </div>
      )}
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div> */
  );
};

export default App;
