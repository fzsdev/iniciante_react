import React from 'react';

const Produto = () => {
  React.useEffect(() => {
    function handleScroll(event) {
      console.log(event);
    }
    window.addEventListener('scroll', handleScroll);
    // Limpa o evento quando o elemento é removido do DOM.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ height: '200vh' }}>
      <p>Meu Produto</p>
    </div>
  );
};

export default Produto;
