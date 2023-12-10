'use client';
import { useState } from 'react';
import '@/components/Form.jsx';
import ClienteForm from '@/components/ClienteForm';



export default function Home(){
    const [isVisible, setIsVisible] = useState(true);


    const toggleVisibility = () => {
      setIsVisible(!isVisible); //
  }

  return(
    <>
    <div className="flex items-center justify-center">
      <button onClick={toggleVisibility}
        className="mt-8 text-white rounded border border-blue-600 bg-green-500 p-2">
        EDIT
      </button>


        {!isVisible && <ClienteForm toggleVisibility={toggleVisibility} />}
      </div>
    </>
  );
}

