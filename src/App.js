import React from 'react';

const App = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: 'Felipe', idade: '31' });

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: 'Não possui' });
  }
  return (
    <div>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
    </div>
  );
};

export default App;
