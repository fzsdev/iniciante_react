import React, { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = useContext(GlobalContext);
  console.log(global);

  if (global.dados === null) return null;
  return (
    <div>
      Produto:
      {global.dados.map(produto => (
        <li key={produto.id}>{produto}</li>
      ))}
    </div>
  );
};

export default Produto;
