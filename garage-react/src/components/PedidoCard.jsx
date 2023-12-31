import Link from 'next/link';
import { useServico } from '../app/contexts/teste';
import InfoPedidoDiv from './InfoPedidoDiv';
import { useState } from 'react';

export default function PedidoCard({
    cliente,
    placa,
    modelo,
    km,
    vendedor,
    data,
    obs,
    mercadoria,
    qnt,
    preco,
    mecanico,
    desconto,
    metodoPagamento,
    bandeira,
    parcelas,
    pagamentoValor,
    id
  }) {


    const [isVisibleInfoCard, setIsVisibleInfoCard] = useState(false)

    const toggleVisibleInfoCard = () => {
      setIsVisibleInfoCard(!isVisibleInfoCard)
    }	
    const { removePedido } = useServico(); // Certifique-se de usar o nome correto do hook

    const handleRemovePedidoCard = () => {
      removePedido(id);
    };




  return (
      <div className="flex w-full" > 
        <div className="w-1/6" ></div>

            <Link href='/' onClick={toggleVisibleInfoCard} className=" flex flex-col w-9/12 bg-gray-900 rounded-lg border-2 border-black my-4 p-[40px] hover:border-[white] transition hover: duration-150">
              <div className='flex'>
                  <div id="placa" className="m-auto">
                    <h1 className="text-white text-xl mr-4">Placa: {placa}</h1>
                  </div>

                  <div id="carro" className="m-auto">
                    <h1 className="text-white text-xl mr-4">Veículo: {modelo}</h1>
                  </div>

                  <div id="KM" className="m-auto">
                    <h1 className="text-white text-xl mr-4">KM: {km}</h1>
                  </div>

                  <div id="cliente" className="m-auto">
                    <h1 className="text-white text-xl mr-4">Cliente: {cliente}</h1>
                  </div>
                  
              </div> 
              {isVisibleInfoCard && <InfoPedidoDiv modelo={modelo} cliente={cliente} obs={obs} vendedor={vendedor} data={data} mercadoria={mercadoria} qnt={qnt} preco={preco} mecanico={mecanico} desconto={desconto} metodoPagamento={metodoPagamento} bandeira={bandeira} parcelas={parcelas} pagamentoValor={pagamentoValor} id={id}
 />}
              </Link>
              <button onClick={handleRemovePedidoCard} className='text-white border-2 bg-black border-black hover:bg-gray-800 my-auto' style={{ padding: '5px' }}>X</button>

            
        </div>
  );
}