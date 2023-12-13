import Link from 'next/link'
import { IoHome, IoPencil, IoReader } from "react-icons/io5";

export default function Sidebar() {
  return (<>
    <div className="corretor w-2/6"></div>
    <section className="funcionario_infos_container w-52 bg-[#FCA311] border-r-2 border-[#FFF] fixed h-screen">

      <div className="m-[30px] my-16 flex text-center flex-col">
  
        <p className="nome_funcionario text-white text-sm text-[black] text-xl center justify-content">João Paulo</p>

        <div className="m-[30px] combine flex flex-row gap-[15px]">
          <p className="codigo_funcionario text-xs">20231370018</p>
        </div>

        <section className="options mt-8 gap-5">

          <div className="m-[30px] text-base text-white transition hover:text-black duration-150">
          <Link href="/" className="flex flex-col items-center">
              <IoHome className="text-3xl" />
              <p>Home</p>
            </Link>
          </div>

          <div className="m-[30px] text-base text-white transition hover:text-black duration-150">
            <Link href="/Cadastro" className="flex flex-col items-center">
              <IoPencil className="text-3xl" />
              <p>Cadastro</p>
            </Link>
          </div>

          <div className="m-[30px] flex flex-col justify-center items-center text-base text-white transition hover:text-black duration-150">
            <Link href="/mercadoria" className="flex flex-col items-center">
              <IoReader className="text-3xl " />
              <p>Consultas</p>
            </Link>
          </div>
        </section>

      </div>

    </section>

  </>)
}
