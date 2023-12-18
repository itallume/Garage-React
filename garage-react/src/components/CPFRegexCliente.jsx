import React, { useState } from 'react';
import { useServico } from '../app/contexts/teste';

export default function CPFRegexCliente({handleChange}) {
  const {
    inputValue,
  } = useServico()

  return (
    <div>
      <input 
        className="p-[10px] rounded-lg bg-white"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Digite algo"
        name='CPF'
      />
    </div>
  );
}