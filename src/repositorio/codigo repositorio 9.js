import React from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';

const App = () => {
  const [modal, setModal] = React.useState(true);
  const [items, setItems] = React.useState('01');

  /*   const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: 'Felipe', idade: '31' });

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: 'Não possui' });
  } */

  function handleClick() {
    setItems('Outro');
  }

  return (
    <div>
      <p>{items}</p>
      <button onClick={handleClick}>Clicar</button>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>

    /*   <div>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
    </div> */
  );
};

export default App;
