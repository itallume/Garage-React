import {useState} from 'react';
import Storage from '@/services/supabase';



const [servico, setServico] = useState([]);

export const loadServico = async () => {
    const servico = await Storage.read('servico');

    setServico(servico);
  };

  const createServico = async (servico) => {
    const newServico = await Storage.create('servico', servico);

    setServico([...servico, newServico]);
  };

  const removeServico = (id) => {
    const newServico = servico.filter(
      (servico) => servico.id !== id
    );

    setServico(newServico);

    Storage.remove('servico', id);
  };

