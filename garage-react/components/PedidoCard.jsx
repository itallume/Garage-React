import Link from 'next/link'

export default function PedidoCard({
  placa,
  modelo,
  km,
  cliente,
}) {
  return (
    <div className="flex"> 
        <div className="w-1/6"></div>

        <Link href='/' className=" flex bg-gray-900 rounded-lg border-2 border-black my-4 w-4/5 flex justify-center p-[40px] hover:border-[white] transition hover: duration-150">

        <div id="placa" className="m-auto">
          <h1 className="text-white text-xl mr-4">Placa: {placa}</h1>
        </div>

        <div id="carro" className="m-auto">
          <h1 className="text-white text-xl mr-4">Veículo: {modelo}</h1>
        </div>

        <div id="KM" className="m-auto">
          <h1 className="text-white text-xl mr-4">KM: {km}</h1>
        </div>

        <div id="cliente" className="m-auto">
          <h1 className="text-white text-xl mr-4">Cliente: {cliente}</h1>
        </div>

        <div className='className="bg-zinc-800 p-1 rounded-full border-black'>
        </div>
        </Link>
    </div>
  );
}