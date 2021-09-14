import React from 'react';

const App = () => {
  const [counter, setCounter] = React.useState(1);
  const [items, setItems] = React.useState(['Item 1']);

  function handleClick() {
    setCounter(counter => {
      return counter + 1;
    });
    setItems(items => [...items, 'Item ' + (counter + 1)]);
  }

  return (
    <div>
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>{counter}</button>
    </div>
  );
};

export default App;
