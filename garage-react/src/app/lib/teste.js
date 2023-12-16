import {useState} from 'react';
import {read, create, remove} from "../services/supabase";

export const loadServico = async () => {
    const servico = await read('servico');

    console.log(servico)
  };
export const createServico = async (servico) => {
    const newServico = await create('servico', servico);
    console.log(newServico)

  };  
  
export function TesteSupabase() {

  const [servico, setServico] = useState([]);

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

};