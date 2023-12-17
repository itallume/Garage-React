import Link from 'next/link';
import { useEffect, useState } from 'react';

import supabase from '../app/services/supabase';




export default function PedidoCard() {

  const [pedido, setPedido] = useState(null) ; //null para não dar erro de renderização


  useEffect (() => {  //useEffect é um hook que executa uma função quando o componente é montado
    const fetchPedido = async () => {
        try{
            const { data, error } = await supabase //data é o retorno da requisição
            .from('Pedidos') //from é a tabela que queremos acessar
            .select('*') //select é o que queremos selecionar
            .single(); //single é para retornar apenas um resultado
            

        if (error) throw error;

        setPedido(data); //setando o estado com o retorno da requisição
        }catch (error) {
        console.error(error);
    }
    }
    fetchPedido(); //chamando a função
    }, [ ]);  

    if (!pedido) return null;

    const { placa, modelo, km, cliente } = pedido; //desestruturando o objeto pedido

 
  return (
    <div className="flex"> 
        <div className="w-1/6"></div>

        <Link href='/'>
            <a className=" flex bg-gray-900 rounded-lg border-2 border-black my-4 w-4/5 flex justify-center p-[40px] hover:border-[white] transition hover: duration-150">

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

        <div className='className="bg-zinc-800 p-1 rounded-full border-black'>
        </div>
        </a>
        </Link>
    </div>
  );
}