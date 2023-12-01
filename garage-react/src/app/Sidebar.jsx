export default function Sidebar(){
    return (<>
      <main className="flex h-screen">
    <div className="corretor w-1/6"></div>
    <section className="funcionario_infos_container w-1/10 bg-00000056 border-r-2 border-[#77ffc0] fixed h-screen">

      <div className="my-16 flex justify-center items-center flex-col">
        <img className="foto_funcionario" src="imgs\WhatsApp Image 2023-10-20 at 16.39.49.jpeg" alt="" />
        <p className="nome_funcionario text-white text-sm">João Paulo Baía</p>

        <div className="combine">
          <p className="codigo_funcionario text-xs">20231370018</p>
        </div>

        <section className="options mt-8">

          <div className="home"><a href="index.html"><i className="fas fa-home text-xs text-green-500 hover:text-white"></i>
              <p>Home</p></a></div>
          <div className="cadastrar_cliente"><a href="cliente.html"><i className="far fa-edit text-xs text-green-500 hover:text-white"></i>
              <p className="text-sm">Cliente</p></a></div>
          <div className="cadastrar_produto"><a href="mercadoria.html"><i className="fas fa-car-battery text-xs text-green-500 hover:text-white"></i>
              <p className="text-sm">Mercadorias</p></a></div>
          <div className="cadastrar_servico"><a href="servico.html"><i className="fas fa-cogs text-xs text-green-500 hover:text-white"></i>
              <p className="text-sm">Serviços</p></a></div>
          <div className="iniciar_venda"><a href="venda.html"><i className="fas fa-money-bill-alt text-xs text-green-500 hover:text-white"></i>
              <p className="text-sm">Pedidos</p></a></div>

        </section>

      </div>
    </section>
    </main></>)
}