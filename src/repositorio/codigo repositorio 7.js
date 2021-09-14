import React from 'react';

const Title = ({ cor, texto }) => {
  return <h1 style={{ color: cor }}>{texto}</h1>;
};

const App = () => {
  return (
    <div>
      <Title cor="red" texto="Meu titulo 1" />
      <Title cor="blue" texto="Meu titulo 2" />
      <Title cor="gray" texto="Meu titulo 3" />
    </div>
  );
};

export default App;
