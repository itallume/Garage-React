
import { createContext, useState, useContext } from 'react';
import {read, create, remove} from "../services/supabase";


export const ServicoContext = createContext({});








export function Visibility() {
  const [isVisible, setIsVisible] = useState(false)
  const [isVisibleCliente, setIsVisibleCliente] = useState(false)

  const toggleVisibility = () => {
    setIsVisible(!isVisible); // inverte o valor de isVisible
  }

  const toggleVisibilityCliente = () => {
    setIsVisibleCliente(!isVisibleCliente); // inverte o valor de isVisible
  }

  return {
      toggleVisibility,
      isVisible,
      toggleVisibilityCliente,
      isVisibleCliente
  }


}






export function ServicoProvider({ children }) {
  
  const servicoData = {
    ID: '',
    Nome: '',
    Descrição: '',
    ValorCusto: '',
  };

  const [servico, setServico] = useState([]);

  const [isVisible, setIsVisible] = useState(false)

  
  const [isVisibleCadastro, setIsVisibleCadastro] = useState(true)

  const toggleVisibility = () => {
     setIsVisible(!isVisible); // inverte o valor de isVisible
   }

  const toggleToFalse = () => {
    console.log('oie >.<')
    setIsVisibleCadastro(false); //
  }
  

  const toggleToTrue = () => {
    setIsVisibleCadastro(true)
  }

  const handleClick = () => {
    // loadServico(),
    toggleVisibility()
    }

  const loadServico = async () => {

    const servico = await read('servico');

    console.log(servico)
  };

  const createServico = async (servico) => {
    const newServico = await create('servico', servico);

    setServico([...servico, newServico]);
  };

  const removeServico = (id) => {
    const newServico = servico.filter(
      (servico) => servico.id !== id
    );

    setServico(newServico);

    remove('servico', id);
  };

  return (
    <ServicoContext.Provider
      value={{
        
        servico,
        setServico,
        isVisible,
        setIsVisible,
        isVisibleCadastro,
        setIsVisibleCadastro,
        toggleVisibility,
        toggleToFalse,
        toggleToTrue,
        loadServico,
        createServico,
        removeServico,
        handleClick
      }}
    >
      {children}
    </ServicoContext.Provider>
  );
}

export function useServico() {
  return useContext(ServicoContext);
};