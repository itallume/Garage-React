import Link from 'next/link'
import { IoHome, IoPencil, IoReader } from "react-icons/io5";

export default function Sidebar(){
    return (<>
    <div className="corretor w-2/6"></div> 
    <section className="funcionario_infos_container w-52 bg-[#FCA311] border-r-2 border-[#FFF] fixed h-screen">

      <div className="m-[30px] my-16 flex justify-center items-center flex-col">
        <img className="foto_funcionario h-[100px] border border-solid border-[black]" src="imgs\WhatsApp Image 2023-10-20 at 16.39.49.jpeg" alt="" />
        <p className="nome_funcionario text-white text-sm text-[black] text-xl center justify-content">João Paulo Baía</p>

        <div className="m-[30px] combine flex flex-row gap-[15px]">
          <p className="codigo_funcionario text-xs">20231370018</p>
        </div>

        <section className="options mt-8 text-center gap-5">

          <div className="m-[30px] text-base text-white transition hover:text-black duration-150"><Link href="/">
              <p>Home</p><IoHome className="text-3xl"/></Link>
          </div>
          
          <div className="m-[30px] text-base text-white transition hover:text-black duration-150"><Link href="/Cadastro">
              <p>Cadastro</p><IoPencil className="text-3xl"/></Link>
          </div>

          <div className="m-[30px] text-base text-white transition hover:text-black duration-150"><Link href="/mercadoria"><i className="fas fa-car-battery text-xs text-green-500 hover:text-white"></i>
              <p>Consultas</p><IoReader className="text-3xl"/></Link>
          </div>
        </section>

      </div>

    </section>

    </>)
}
