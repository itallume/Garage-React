'use client';


// import Image from 'next/image'
import './style.css'
import Sidebar from './Sidebar.jsx'
import Form from './Form.jsx'

import { useState } from 'react';

// import { pedidos } from '@/data/pedidos';


export default function Home(){
  const [isShowForm] = useState(true);


  return(
    <>
    <Sidebar />
    <main></main>
    <Form />
    </>
  );
}

