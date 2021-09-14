import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = () => {
  return (
    <form action="">
      <p>
        <label htmlFor="nome">Nome</label>
        <Input />
      </p>

      <p>
        <label htmlFor="sobrenome">Sobrenome</label>
        <Input />
      </p>

      <p>
        {' '}
        <label htmlFor="mail">E-mail</label>
        <Input />
      </p>

      <p>
        <Button />
      </p>
    </form>
  );
};

export default Form;
