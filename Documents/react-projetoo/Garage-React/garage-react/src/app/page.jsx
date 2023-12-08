'use client';
import { useState } from 'react';
import './style.css'
import Form from '@/components/Form';



export default function Home(){
    const [isVisible, setIsVisible] = useState(true);


    const toggleVisibility = () => {
      setIsVisible(!isVisible); 
  }

  return(
    <>
    <div className="flex items-center justify-center">
      <button onClick={toggleVisibility}
        className="mt-8 text-white rounded border border-blue-600 bg-[#00ff0059] p-2">
        EDIT
      </button>


        {isVisible && <Form toggleVisibility={toggleVisibility} />}
      </div>
    </>
  );
}