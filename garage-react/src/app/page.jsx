'use client';
import './style.css'
import Form from '../components/Form';

import { IoAdd} from "react-icons/io5";
import {ServicoProvider, Visbility, useServico} from './contexts/teste';
import PedidoCard from '../components/PedidoCard';

import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

const supabaseUrl = 'https://cmwtdetfvzqjujookolj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtd3RkZXRmdnpxanVqb29rb2xqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4NjUzNzksImV4cCI6MjAxNDQ0MTM3OX0.4XciDONXTVqJmICrJ7TX85tR_h53Qh3X1bM5EWvcKlE';
const supabase = createClient(supabaseUrl, supabaseKey);





export default function Home(){
    const  {
      handleClick,
      // isVisible,
      // toggleVisibility
    } = useServico();
  


  const [pedidos, setpedidos] = useState([]);


  useEffect(() => {
  const fetchpedidos = async () => {
    try{
      const { data, error } = await supabase
      .from('Pedidos')
      .select('*')
      .order('id', { ascending: true });
      if (error) throw error;

      setpedidos(data || []);
    }catch (error) {
      console.error(error);
    }
  }
  fetchpedidos();
}, []);
   
  console.log(pedidos)
  const {isVisible, toggleVisibility} = Visbility()
    
  return(
    <>
    <div className="flex items-center justify-center">
      <button onClick={toggleVisibility}
        className="mt-8 text-white rounded border border-blue-600 bg-[#00ff0059] p-2">
        <IoAdd />
      </button>


      {isVisible && <Form toggleVisibility={toggleVisibility}/>}
    </div>


    {pedidos.map((pedido) => (
        <PedidoCard {...pedido} key={pedido.id}/> //key é para o react identificar cada elemento
    ))}


    </>
  );
}