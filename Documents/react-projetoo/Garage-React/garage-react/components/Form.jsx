export default function Form({ toggleVisibility }) {
    return (
      <>
      <main className="flex h-screen">
      <div className="x w-1/6"></div>
      <section className="w-4/5 flex justify-center items-center flex-col">


        <section className="justify-center align-center" id="formulario">
          <div className="justify-center items-center pt-[30px]">
            <form className="flex justify-center flex-col bg-gray-900 px-8 py-8 rounded-lg border-white shadow-[10px_5px_rgb(255,255,255)] transition-all duration-[0.5s] ease-[ease-in-out] hover:shadow-[10px_5px_rgb(255,255,255)] hover:transition-all hover:duration-[0.25s] hover:ease-[ease-in-out]" id="borda1">


              <div className="flex">
                <button className="border-2 mx-1 text-white p-2 rounded-lg bg-[#00ff0059] hover:bg-green-500">LEFT</button>
                <button className="border-2 mx-1 text-white p-2 rounded-lg bg-[#00ff0059] hover:bg-green-500">RIGHT</button>
                
                <label className="pt-2 text-xl text-white " for="nome">Cliente:</label>
                <input type="text" value="" id="" className="mx-4 bg-white p-2 rounded-lg text-white"></input>
                <label className="pt-2 text-xl text-white " for="nome">Placa:</label>
                <input type="text" value="" id="" className="mx-4  p-2 rounded-lg "></input>
                <label className="pt-2 text-xl text-white " for="nome">Cod:</label>
                <input type="text" value="" id="" className="mx-4  p-2 rounded-lg "></input>
                <button className="bg-[#00ff0059] mx-8 border-2 text-white p-2 rounded-lg hover:bg-green-500">+</button>
              </div>


              <div className="grid grid-cols-10 gap-2">
                <div id="placa" className="m-1 flex flex-col ">
                  <label className="text-xl text-white" for="placa">Placa:</label>
                  <input type="text" name="placa" id="placa" placeholder="" autocomplete="off"
                    className="p-[10px] rounded-lg"></input>
                </div>

                <div id="carro" className="m-1 flex flex-col">
                  <label className="text-xl text-white" for="carro">Modelo:</label>
                  <input type="text" name="modelo" id="carro" placeholder="" autocomplete="off"
                    className="p-[10px] rounded-lg bg-white"></input>
                </div>
                <div id="KM" className="m-1 flex flex-col">
                  <label className="text-xl text-white " for="km">KM:</label>
                  <input type="text" name="km" id="km" placeholder="" autocomplete="off"
                    className="p-[10px] rounded-lg"></input>
                </div>

                <div id="obs" className="m-1 flex flex-col col-span-2">
                  <label className="text-xl text-white " for="obs">Cliente:</label>
                  <input type="text" name="cliente" id="cliente" placeholder="" autocomplete="off"
                    className="p-[10px] rounded-lg "></input>
                </div>
                <div id="vendedor" className="m-1 flex flex-col col-span-2">
                  <label className="text-xl text-white " for="vendedor">Vendedor:</label>
                  <input type="text" name="vendedor" id="vendedor" placeholder="" autocomplete="off"
                    className="p-[10px] rounded-lg "></input>
                </div>

                <div id="nf" className="m-1 flex flex-col">
                  <label className="text-xl text-white " for="nf">NF:</label>
                </div>

                <div id="data" className="m-1 flex flex-col">
                  <label className="text-xl text-white " for="data">Data:</label>
                </div>
                <div id="codigo" className="m-1 flex flex-col">
                  <label className="text-xl text-white " for="codigo">codigo:</label>
                </div>
                <div id="obs" className="m-1 flex flex-col col-span-10">
                  <label className="text-xl text-white " for="obs">Obs:</label>
                  <input type="text" name="obs" id="obs" placeholder="" autocomplete="off"
                    className="p-[10px] rounded-lg "></input>
                </div>

                <div id="Mercadoria" className="m-1 flex flex-col col-span-7">
                  <label className="text-xl text-white " for="Mercadoria">Mercadoria:</label>
                  <input type="text" name="Mercadoria" id="Mercadoria" placeholder="" autocomplete="off"
                    className="p-[10px] my-2 rounded-lg "></input>
                  <input type="text" name="Mercadoria2" id="Mercadoria2" placeholder="" autocomplete="off"
                    className="p-[10px] my-2 rounded-lg "></input>
                </div>

                <div id="qnt" className="m-1 flex flex-col col-span-1">
                  <label className="text-xl text-white " for="qnt">qnt:</label>
                  <input type="text" name="qnt" id="qnt" placeholder="" autocomplete="off"
                    className="p-[10px] my-2 rounded-lg "></input>
                  <input type="text" name="qnt2" id="qnt2" placeholder="" autocomplete="off"
                    className="p-[10px] my-2 rounded-lg "></input>
                </div>

                <div id="price" className="m-1 flex flex-col col-span-1">
                  <label className="text-xl text-white " for="price">preco:</label>
                  <input type="text" name="price" id="price" placeholder="" autocomplete="off"
                    className="p-[10px] my-2 rounded-lg "></input>
                  <input type="text" name="price2" id="price2" placeholder="" autocomplete="off"
                    className="p-[10px] my-2 rounded-lg "></input>
                </div>

                <div id="mecanico" className="m-1 flex flex-col col-span-1">
                  <label className="text-xl text-white " for="mecanico">mecanico:</label>
                  <input type="text" name="mecanico" id="mecanico" placeholder="" autocomplete="off"
                    className="p-[10px] my-2 rounded-lg "></input>
                  <input type="text" name="mecanico2" id="mecanico2" placeholder="" autocomplete="off"
                    className="p-[10px] my-2 rounded-lg "></input>
                </div>


                <div className="col-span-7"></div>

                <div id="desconto" className="m-1 flex flex-col col-span-1">
                  <label className="text-xl text-white " for="desconto">desconto:</label>
                  <input type="text" name="desconto" id="desconto" placeholder="" autocomplete="off"
                    className="p-[10px] my-2 rounded-lg "></input>
                </div>

                <div id="price" className="m-1 flex flex-col col-span-2">
                  <label className="text-xl text-white " for="price">preco:</label>
                  <input type="text" name="price" id="price" placeholder="" autocomplete="off"
                    className="p-[10px] my-2 rounded-lg "></input>
                </div>


                <div id="method_payment" className="m-1 flex flex-col col-span-1">
                  <label className="text-xl text-white " for="method_payment">Metodo:</label>
                  <input type="text" name="method_payment" id="method_payment" placeholder="" autocomplete="off"
                    className="p-[10px] my-2 rounded-lg "></input>
                </div>

                <div id="Bandeira" className="m-1 flex flex-col col-span-1">
                  <label className="text-xl text-white " for="Bandeira">Bandeira:</label>
                  <input type="text" name="Bandeira" id="Bandeira" placeholder="" autocomplete="off"
                    className="p-[10px] my-2 rounded-lg "></input>
                </div>

                <div id="parcelas" className="m-1 flex flex-col col-span-1">
                  <label className="text-xl text-white " for="parcelas">Parcelas:</label>
                  <input type="text" name="parcelas" id="parcelas" placeholder="" autocomplete="off"
                    className="p-[10px] my-2 rounded-lg "></input>
                </div>

                <div id="payment_value" className="m-1 flex flex-col col-span-1">
                  <label className="text-xl text-white " for="payment_value">Preco:</label>
                  <input type="text" name="payment_value" id="payment_value" placeholder="" autocomplete="off"
                    className="p-[10px] my-2 rounded-lg "></input>
                </div>
              </div>

              <div className="flex justify-center pt-[25px]">
            
                <button className="bg-[#00ff0059] border-2 text-white p-2 rounded-lg hover:bg-green-500">Salvar</button>
                <button onClick={toggleVisibility} className="bg-[#00ff0059] border-2 text-white p-2 rounded-lg hover:bg-green-500">Fechar</button> 
              </div>
            </form>
        </div>
      </section>
      </section>
      </main>
      </>
  );
}