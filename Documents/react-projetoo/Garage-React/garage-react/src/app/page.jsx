'use client';


// import Image from 'next/image'
import './style.css'
import '@/components/Form.jsx';
import Form from '@/components/Form.jsx';


import { useState } from 'react';

// import { pedidos } from '@/data/pedidos';


export default function Home(){
  const [isShowForm, setIsShowForm] = useState(true);


  return(
    <>
      <Form />
    </>
  );
}

