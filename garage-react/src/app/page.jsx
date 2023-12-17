'use client';
import './style.css'
import Form from '../components/Form';
import { pedidos } from '../data/seed.js'
import PedidoCard from '../components/PedidoCard';
import { IoAdd} from "react-icons/io5";
import {ServicoProvider, Visbility, useServico} from './contexts/teste';


export default function Home(){
    const  {
      handleClick,
      // isVisible,
      // toggleVisibility
    } = useServico();
  
   
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
        <PedidoCard {...pedido} key={pedido.cod}/>
    ))}


    </>
  );
}