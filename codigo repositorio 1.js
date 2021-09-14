import React from 'react';
import './App.js';

const title = <h1>Titulo de teste</h1>;

const App = () => {
  const random = Math.random();
  const active = true;

  function showName() {
    return 'Fella';
  }
  return (
    <>
      {title}
      <p>
        {true ? '123' : '456'} - {18}
        {' ' + showName()}
      </p>
      <p className={active ? 'Ligado' : 'Desligado'}>
        {(random * 103.0035) / 27}
      </p>
      <p>{new Date().getFullYear()}</p>
    </>
    /*<a
      className="ativo"
      href="http://fzsdev.github.io/caravan"
      title="Teste link para site projeto"
    >
      Projeto Caravan
    </a>*/

    // pode ser usado tb <></>

    /*<React.Fragment>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" />
    </React.Fragment>*/
  );
};

export default App;
