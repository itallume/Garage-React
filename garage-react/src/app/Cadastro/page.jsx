'use client';
import '../../components/Form.jsx';
import '../../components/Opcoes.jsx';
import '../../components/CadServicoForm.jsx';
import ClienteForm from '../../components/ClienteForm';
import Opcoes from '../../components/Opcoes.jsx';
import CadServicoForm from '../../components/CadServicoForm.jsx';
import {useServico} from '../contexts/teste';

export default function Cadastro(){
  const {
    isVisibleCadastro,
  } = useServico();

  return(
    <>
      <div className='flex items-center justify-center flex-col'>
          <Opcoes />
          <div className="flex items-center justify-center">


            {!isVisibleCadastro && <ClienteForm />}
            {isVisibleCadastro && <CadServicoForm />}
            
        </div>
      </div>
    </>
  );
}

