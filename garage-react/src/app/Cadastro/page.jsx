'use client';
import { useState } from 'react';
import '@/components/Form.jsx';
import '@/components/Opcoes.jsx'
import '@/components/CadServicoForm.jsx'
import ClienteForm from '@/components/ClienteForm';
import Opcoes from '@/components/Opcoes.jsx';
import CadServicoForm from '@/components/CadServicoForm.jsx';

export default function Cadastro(){
    const [isVisible, setIsVisible] = useState(true);


  const toggleToFalse = () => {
    setIsVisible(false); //
  }

  const toggleToTrue = () => {
    setIsVisible(true)
  }

  return(
    <>
      <div className='flex items-center justify-center flex-col'>
          <Opcoes toggleToFalse={toggleToFalse} toggleToTrue={toggleToTrue}/>
          <div className="flex items-center justify-center">


            {isVisible && <ClienteForm />}
            {!isVisible && <CadServicoForm />}
            
        </div>
      </div>
    </>
  );
}

