import Link from 'next/link'


import Link from "next/link";

export default function Sidebar(){
    return (<>
    <div className="corretor w-1/6"></div>
    <section className="funcionario_infos_container w-1/10 bg-00000056 border-r-2 border-[#77ffc0] fixed h-screen">

      <div className="my-16 flex justify-center items-center flex-col">
        <img className="foto_funcionario" src="imgs\WhatsApp Image 2023-10-20 at 16.39.49.jpeg" alt="" />
        <p className="nome_funcionario text-white text-sm">João Paulo Baía</p>

        <div className="combine">
          <p className="codigo_funcionario text-xs">20231370018</p>
        </div>

        <section className="options mt-8">

          <div className="home"><Link href="/"><i className="fas fa-home text-xs text-green-500 hover:text-white"></i>
              <p>Home</p></Link></div>
          <div className="cadastrar_cliente"><Link href="/"><i className="far fa-edit text-xs text-green-500 hover:text-white"></i>
              <p className="text-sm">Cliente</p></Link></div>
          <div className="cadastrar_produto"><Link href="/"><i className="fas fa-car-battery text-xs text-green-500 hover:text-white"></i>
              <p className="text-sm">Mercadorias</p></Link></div>
          <div className="cadastrar_servico"><Link href="/"><i className="fas fa-cogs text-xs text-green-500 hover:text-white"></i>
              <p className="text-sm">Serviços</p></Link></div>
          <div className="iniciar_venda"><Link href="/"><i className="fas fa-money-bill-alt text-xs text-green-500 hover:text-white"></i>
              <p className="text-sm">Pedidos</p></Link></div>
          <div className="home"><Link href=""><i className="fas fa-home text-xs text-green-500 hover:text-white"></i>
              <p>Home</p></Link></div>
          <div className="cadastrar_cliente"><Link href=""><i className="far fa-edit text-xs text-green-500 hover:text-white"></i>
              <p className="text-sm">Cliente</p></Link></div>
          <div className="cadastrar_produto"><Link href=""><i className="fas fa-car-battery text-xs text-green-500 hover:text-white"></i>
              <p className="text-sm">Mercadorias</p></Link></div>
          <div className="cadastrar_servico"><Link href=""><i className="fas fa-cogs text-xs text-green-500 hover:text-white"></i>
              <p className="text-sm">Serviços</p></Link></div>
          <div className="iniciar_venda"><Link href=""><i className="fas fa-money-bill-alt text-xs text-green-500 hover:text-white"></i>
              <p className="text-sm">Pedidos</p></Link></div>

        </section>

      </div>
    </section>
    </>)
}