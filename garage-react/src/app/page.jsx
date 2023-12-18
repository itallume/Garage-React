'use client';
import './style.css'
import Form from '../components/Form';

import { IoAdd} from "react-icons/io5";
import {useServico} from './contexts/teste';
import PedidoCard from '../components/PedidoCard';
import { useEffect, useState } from 'react';
import supabase from './services/supabase';
import InfoPedidoDiv from '../components/InfoPedidoDiv';

export default function Home(){
    const  {
      isVisible,
      toggleVisibility,
      loadPedidos,
      pedidos
    } = useServico();

  useEffect(() => { 
  loadPedidos();
}, []);
   
    
  return(
    <>
    <div className="flex items-center justify-center">
      <button onClick={toggleVisibility}
        className="mt-8 text-white rounded border border-blue-600 bg-[#00ff0059] p-2">
        <IoAdd />
      </button>

    
      {isVisible && <Form/>}
    </div>


    {pedidos.map((pedido) => (
        <PedidoCard {...pedido} key={pedido.id}/> //key é para o react identificar cada elemento
    ))}


    </>
  );
}