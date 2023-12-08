export default function ClienteForm(){
    return (<>
      <main className="flex h-screen">
      <div className="w-1/6"></div>
        <section className="w-4/5 flex justify-center items-center flex-col">
          <section className="justify-center align-center" id="formulario">
            <div className="justify-center items-center pt-[30px]">



            <form className="flex justify-center flex-col bg-gray-900 px-8 py-8 rounded-lg border-white shadow-[10px_5px_rgb(255,255,255)] transition-all duration-[0.5s] ease-[ease-in-out] hover:shadow-[10px_5px_rgb(255,255,255)] hover:transition-all hover:duration-[0.25s] hover:ease-[ease-in-out]" id="borda1">

              <div className="flex">
                <a type="button" value="Left" name="" id="buttonleft" className="mx-1  p-2 rounded-lg active:bg-[#00ff0059] hover:cursor-pointer">LEFT</a>
                <a type="button" value="Right" name="" id="buttonright" className="mx-1  p-2 rounded-lg active:bg-[#00ff0059] hover:cursor-pointer">RIGHT</a>
                <a type="button" value="Adicionar" name="" id="buttonadd" className="mx-8  p-2 rounded-lg active:bg-[#00ff0059] hover:cursor-pointer">+</a>
                <label className="pt-2 text-xl text-white" for="nome">nome:</label>
                <input type="text" value="" name="" id="" className="mx-4 p-2 rounded-lg "></input>
                <label className="pt-2 text-xl text-white" for="nome">cpf:</label>
                <input type="text" value="" name="" id="" className="mx-4 p-2 rounded-lg "></input>
                <label className="pt-2 text-xl text-white" for="nome">cod:</label>
                <input type="text" value="" name="" id="" className="mx-4 p-2 rounded-lg "></input>
              </div>

            <div className="grid grid-cols-5 gap-4">
              <div id="nome" className="m-1 flex flex-col col-span-3">
                <label className="text-xl text-white" for="nome">nome:</label>
                <input type="text" name="nome" id="nome" placeholder="" autocomplete="off" className="p-[10px] rounded-lg"></input>
              </div>
              <div id="datacadastro" className="m-1 flex flex-col">
                <label className="text-xl text-white" for="datacadastro">Data:</label>
              </div>
              <div id="codigo" className="m-1 flex flex-col">
                <label className="text-xl text-white" for="codigo">codigo:</label>
              </div>

              <div id="cpf" className="m-1 flex flex-col col-span-2">
                <label className="text-xl text-white" for="cpf">cpf:</label>
                <input type="text" name="cpf" id="cpf" placeholder="" autocomplete="off" className="p-[10px] rounded-lg"></input>
              </div>
              <div id="rg" className="m-1 flex flex-col col-span-2">
                <label className="text-xl text-white" for="rg">rg:</label>
                <input type="text" name="rg" id="rg" placeholder="" autocomplete="off" className="p-[10px] rounded-lg"></input>
              </div>
              <div id="cep" className="m-1 flex flex-col">
                <label className="text-xl text-white" for="cep">cep:</label>
                <input type="text" name="cep" id="cep" placeholder="" autocomplete="off" className="p-[10px] rounded-lg"></input>
              </div>
              <div id="rua" className="m-1 flex flex-col col-span-2">
                <label className="text-xl text-white" for="rua">rua:</label>
                <input type="text" name="rua" id="rua" placeholder="" autocomplete="off" className="p-[10px] rounded-lg"></input>
              </div>
              <div id="bairro" className="m-1 flex flex-col col-span-2">
                <label className="text-xl text-white" for="bairro">bairro:</label>
                <input type="text" name="bairro" id="bairro" placeholder="" autocomplete="off" className="p-[10px] rounded-lg"></input>
              </div>
              <div id="cidade" className="m-1 flex flex-col">
                <label className="text-xl text-white" for="cidade">cidade:</label>
                <input type="text" name="cidade" id="cidade" placeholder="" autocomplete="off" className="p-[10px] rounded-lg"></input>
              </div>
              <div id="numero" className="m-1 flex flex-col">
                <label className="text-xl text-white" for="numero">numero:</label>
                <input type="text" name="numero" id="numero" placeholder="" autocomplete="off" className="p-[10px] rounded-lg"></input>
              </div>
              <div id="email" className="m-1 flex flex-col col-span-2">
                <label className="text-xl text-white" for="email">Email:</label>
                <input type="text" name="email" id="email" placeholder="" autocomplete="off" className="p-[10px] rounded-lg"></input>
              </div>
              <div id="telefone" className="m-1 flex flex-col col-span-2">
                <label className="text-xl text-white" for="telefone">telefone:</label>
                <input type="text" name="telefone" id="telefone" placeholder="" autocomplete="off" className="p-[10px] rounded-lg"></input>
              </div>
            </div>
            <div className="flex justify-center pt-6">
              <input type="button" value="Salvar" name="btn" id="button" className="bg-zinc-800 p-2 rounded-lg active:bg-[#00ff0059] hover:cursor-pointer"></input>
              <a type="button" value="Fechar" name="" id="buttonf" className="bg-zinc-800 p-2 rounded-lg active:bg-[#00ff0059] hover:cursor-pointer">Fechar</a>
              <input type="button" value="Deletar" name="" id="button" className="bg-zinc-800 p-2 rounded-lg active:bg-[#00ff0059] hover:cursor-pointer"></input>
            </div>
          </form>
          </div>
        </section>  


        <section>
          <a id="buttom_cliente" href="#">
              <div className="clientes w-[65vw] mt-8 p-4 md:w-[80vw]">
              </div>
          </a>
          </section>
          </section>
      </main>
    </>)
}