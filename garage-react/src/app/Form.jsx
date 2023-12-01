export default function Form(){
    return (<>
      <main className="flex h-screen">
      <section className="w-4/5 flex justify-center items-center flex-col">



        <a className="material-symbols-outlined mt-12 cursor-pointer hover:text-[#00ff0059]" id="expandir">edit
        </a>

        <section className="hidden justify-center align-center" id="formulario">
          <div className="justify-center items-center pt-[30px]">
            <form className="flex justify-center flex-col bg-[#574F73] px-8 py-8 rounded-lg" id="borda1">


              <div className="flex">
                <a type="button" value="Left" name="" id="buttonleft" className="mx-1 bg-zinc-800 p-2 rounded-lg active:bg-[#00ff0059] hover:cursor-pointer">right</a>
                <a type="button" value="Right" name="" id="buttonright" className="mx-1 bg-zinc-800 p-2 rounded-lg active:bg-[#00ff0059] hover:cursor-pointer">left</a>
                <a type="button" value="Adicionar" name="" id="buttonadd" className="mx-8 bg-zinc-800 p-2 rounded-lg active:bg-[#00ff0059] hover:cursor-pointer">+</a>
                <label className="pt-2 text-xl text-black" for="nome">cliente:</label>
                <input type="text" value="" name="" id="" className="mx-4 bg-zinc-800 p-2 rounded-lg "></input>
                <label className="pt-2 text-xl text-black" for="nome">placa:</label>
                <input type="text" value="" name="" id="" className="mx-4 bg-zinc-800 p-2 rounded-lg "></input>
                <label className="pt-2 text-xl text-black" for="nome">cod:</label>
                <input type="text" value="" name="" id="" className="mx-4 bg-zinc-800 p-2 rounded-lg "></input>
              </div>


              <div className="grid grid-cols-10 gap-2">
                <div id="placa" className="m-1 flex flex-col ">
                  <label className="text-xl text-black" for="placa">Placa:</label>
                  <input type="text" name="placa" id="placa" placeholder="" autocomplete="off"
                    className="p-[10px] rounded-lg bg-black"></input>
                </div>

                <div id="carro" className="m-1 flex flex-col">
                  <label className="text-xl text-black" for="carro">Modelo:</label>
                  <input type="text" name="modelo" id="carro" placeholder="" autocomplete="off"
                    className="p-[10px] rounded-lg bg-black"></input>
                </div>
                <div id="KM" className="m-1 flex flex-col">
                  <label className="text-xl text-black" for="km">KM:</label>
                  <input type="text" name="km" id="km" placeholder="" autocomplete="off"
                    className="p-[10px] rounded-lg bg-black"></input>
                </div>

                <div id="obs" className="m-1 flex flex-col col-span-2">
                  <label className="text-xl text-black" for="obs">Cliente:</label>
                  <input type="text" name="cliente" id="cliente" placeholder="" autocomplete="off"
                    className="p-[10px] rounded-lg bg-black"></input>
                </div>
                <div id="vendedor" className="m-1 flex flex-col col-span-2">
                  <label className="text-xl text-black" for="vendedor">Vendedor:</label>
                  <input type="text" name="vendedor" id="vendedor" placeholder="" autocomplete="off"
                    className="p-[10px] rounded-lg bg-black"></input>
                </div>

                <div id="nf" className="m-1 flex flex-col">
                  <label className="text-xl text-black" for="nf">NF:</label>
                </div>

                <div id="data" className="m-1 flex flex-col">
                  <label className="text-xl text-black" for="data">Data:</label>
                </div>
                <div id="codigo" className="m-1 flex flex-col">
                  <label className="text-xl text-black" for="codigo">codigo:</label>
                </div>
                <div id="obs" className="m-1 flex flex-col col-span-10">
                  <label className="text-xl text-black" for="obs">Obs:</label>
                  <input type="text" name="obs" id="obs" placeholder="" autocomplete="off"
                    className="p-[10px] rounded-lg bg-black"></input>
                </div>

                <div id="Mercadoria" className="m-1 flex flex-col col-span-7">
                  <label className="text-xl text-black" for="Mercadoria">Mercadoria:</label>
                  <input type="text" name="Mercadoria" id="Mercadoria" placeholder="" autocomplete="off"
                    className="p-[10px] my-2 rounded-lg bg-black"></input>
                  <input type="text" name="Mercadoria2" id="Mercadoria2" placeholder="" autocomplete="off"
                    className="p-[10px] my-2 rounded-lg bg-black"></input>
                </div>

                <div id="qnt" className="m-1 flex flex-col col-span-1">
                  <label className="text-xl text-black" for="qnt">qnt:</label>
                  <input type="text" name="qnt" id="qnt" placeholder="" autocomplete="off"
                    className="p-[10px] my-2 rounded-lg bg-black"></input>
                  <input type="text" name="qnt2" id="qnt2" placeholder="" autocomplete="off"
                    className="p-[10px] my-2 rounded-lg bg-black"></input>
                </div>

                <div id="price" className="m-1 flex flex-col col-span-1">
                  <label className="text-xl text-black" for="price">preco:</label>
                  <input type="text" name="price" id="price" placeholder="" autocomplete="off"
                    className="p-[10px] my-2 rounded-lg bg-black"></input>
                  <input type="text" name="price2" id="price2" placeholder="" autocomplete="off"
                    className="p-[10px] my-2 rounded-lg bg-black"></input>
                </div>

                <div id="mecanico" className="m-1 flex flex-col col-span-1">
                  <label className="text-xl text-black" for="mecanico">mecanico:</label>
                  <input type="text" name="mecanico" id="mecanico" placeholder="" autocomplete="off"
                    className="p-[10px] my-2 rounded-lg bg-black"></input>
                  <input type="text" name="mecanico2" id="mecanico2" placeholder="" autocomplete="off"
                    className="p-[10px] my-2 rounded-lg bg-black"></input>
                </div>


                <div className="col-span-7"></div>

                <div id="desconto" className="m-1 flex flex-col col-span-1">
                  <label className="text-xl text-black" for="desconto">desconto:</label>
                  <input type="text" name="desconto" id="desconto" placeholder="" autocomplete="off"
                    className="p-[10px] my-2 rounded-lg bg-black"></input>
                </div>

                <div id="price" className="m-1 flex flex-col col-span-2">
                  <label className="text-xl text-black" for="price">preco:</label>
                  <input type="text" name="price" id="price" placeholder="" autocomplete="off"
                    className="p-[10px] my-2 rounded-lg bg-black"></input>
                </div>


                <div id="method_payment" className="m-1 flex flex-col col-span-1">
                  <label className="text-xl text-black" for="method_payment">Metodo:</label>
                  <input type="text" name="method_payment" id="method_payment" placeholder="" autocomplete="off"
                    className="p-[10px] my-2 rounded-lg bg-black"></input>
                    <input type="text" name="method_payment2" id="method_payment2" placeholder="" autocomplete="off"
                    className="p-[10px] my-2 rounded-lg bg-black"></input>
                </div>

                <div id="Bandeira" className="m-1 flex flex-col col-span-1">
                  <label className="text-xl text-black" for="Bandeira">Bandeira:</label>
                  <input type="text" name="Bandeira" id="Bandeira" placeholder="" autocomplete="off"
                    className="p-[10px] my-2 rounded-lg bg-black"></input>
                  <input type="text" name="Bandeira2" id="Bandeira2" placeholder="" autocomplete="off"
                    className="p-[10px] my-2 rounded-lg bg-black"></input>
                </div>

                <div id="parcelas" className="m-1 flex flex-col col-span-1">
                  <label className="text-xl text-black" for="parcelas">Parcelas:</label>
                  <input type="text" name="parcelas" id="parcelas" placeholder="" autocomplete="off"
                    className="p-[10px] my-2 rounded-lg bg-black"></input>
                  <input type="text" name="parcelas2" id="Bandeira2" placeholder="" autocomplete="off"
                    className="p-[10px] my-2 rounded-lg bg-black"></input>
                </div>

                <div id="payment_value" className="m-1 flex flex-col col-span-1">
                  <label className="text-xl text-black" for="payment_value">Preco:</label>
                  <input type="text" name="payment_value" id="payment_value" placeholder="" autocomplete="off"
                    className="p-[10px] my-2 rounded-lg bg-black"></input>
                    <input type="text" name="payment_value2" id="payment_value2" placeholder="" autocomplete="off"
                    className="p-[10px] my-2 rounded-lg bg-black"></input>
                </div>
              </div>

              <div class="flex justify-center pt-[25px]">
            
                <input type="button" value="Salvar" name="btn" id="button" class="bg-zinc-800 p-2 rounded-lg active:bg-[#00ff0059] hover:cursor-pointer"></input>
                <a type="button" value="Fechar" name="btn" id="buttonf" class="bg-zinc-800 p-2 rounded-lg active:bg-[#00ff0059] hover:cursor-pointer">Fechar</a> 
              </div>
            </form>
        </div>
      </section>
      </section>
      </main>
    </>)
}