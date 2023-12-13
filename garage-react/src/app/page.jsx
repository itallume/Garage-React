'use client';


import { useState, useEffect } from 'react';
import './style.css'
import Form from '@/components/Form';
import { pedidos } from '@/data/seed.js'
import PedidoCard from '@/components/PedidoCard';
import { IoAdd} from "react-icons/io5";
import{loadServico} from "@/src/lib/teste.js"




export default function Home(){
    const [isVisible, setIsVisible] = useState(false); // useState(false) para esconder o formulário

    const handleClick = () => {loadServico(), toggleVisibility()}

    const toggleVisibility = () => {
      setIsVisible(!isVisible); // inverte o valor de isVisible
  }

  return(
    <>
    <div className="flex items-center justify-center">
      <button onClick  ={handleClick}
        className="mt-8 text-white rounded border border-blue-600 bg-[#00ff0059] p-2">
        <IoAdd />
      </button>


      {isVisible && <Form toggleVisibility={toggleVisibility} />}
    </div>


    {pedidos.map((pedido) => (
        <PedidoCard {...pedido} key={pedido.cod}/>
    ))}


    </>
  );
}