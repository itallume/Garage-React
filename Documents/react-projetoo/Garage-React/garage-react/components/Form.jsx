import { useState, useEffect } from 'react';
import { pedidos as ped } from '@/data/seed';


export default function Form({ toggleVisibility }) {
  const [formData, setFormData] = useState({ // Estado inicial do formulário
    cliente: '',
    cod: '',
    placa: '',
    modelo: '',
    km: '',
    vendedor: '',
    nf: '',
    data: '',
    obs: '',
    mercadoria: '',
    mercadoria2: '',
    qnt: '',
    qnt2: '',
    preco: '',
    mecanico: '',
    mecanico2: '',
    desconto: '',
    preco2: '',
    metodoPagamento: '',
    bandeira: '',
    parcelas: '',
    pagamentoValor: '',
  });


  const [pedidos] = useState(ped); // Estado inicial dos pedidos

  useEffect(() => { // Atualize o pagamentoValor sempre que o preço ou o preço2 mudar
    updatePagamentoValor();
  }, [formData.preco, formData.preco2]);  // Dependências do efeito
  

  const updatePagamentoValor = () => {
    // Cálculo do pagamentoValor
    const pagamentoValor =
      parseFloat(formData.preco || 0) + parseFloat(formData.preco2 || 0);

    // Atualize o estado apenas para pagamentoValor
    setFormData((prevData) => ({
      ...prevData,
      pagamentoValor: pagamentoValor.toFixed(2),
       // Garanta que seja formatado como número de ponto flutuante com 2 casas decimais
    }));
  };



  const handleSubmit = (e) => { // Manipulador de envio do formulário
    e.preventDefault(); // Evite que o formulário seja enviado

    const newPedido = {
      ...formData,
      cod: pedidos.length + 1,
      pagamentoValor: (parseFloat(formData.preco || 0) + parseFloat(formData.preco2 || 0)).toFixed(2), // Garanta que seja formatado como número de ponto flutuante com 2 casas decimais
      preco: parseFloat(formData.preco || 0).toFixed(2), // Garanta que seja formatado como número de ponto flutuante com 2 casas decimais
      preco2: parseFloat(formData.preco2 || 0).toFixed(2), // Garanta que seja formatado como número de ponto flutuante com 2 casas decimais
    };    


    pedidos.push(newPedido); // Adicione o novo pedido ao array de pedidos

    setFormData({ // Limpe o formulário
      cliente: '',
      cod: '',
      placa: '',
      modelo: '',
      km: '',
      vendedor: '',
      nf: '',
      data: '',
      codigo: '',
      obs: '',
      mercadoria: '',
      qnt: '',
      preco: '',
      mecanico: '',
      desconto: '',
      preco2: '',
      metodoPagamento: '',
      bandeira: '',
      parcelas: '',
      pagamentoValor: '',
    });
  };

    
    const handleChange = (e) => { // Manipulador de alteração de formulário
      const { name, value } = e.target; // Extraia o nome e o valor do alvo
      setFormData((prevData) => ({ // Atualize o estado com o novo valor
        ...prevData, // Mantenha os valores anteriores
        [name]: value, // Atualize o valor do campo de entrada
      }));
      updatePagamentoValor(); // Atualize o pagamentoValor
    };


    return (
      <>
      <main className="flex h-screen">
      <div className="x w-1/6"></div>
      <section className="w-4/5 flex justify-center items-center flex-col">

        <section className="justify-center align-center" id="formulario">
          <div className="justify-center items-center pt-[30px]">
            <form onSubmit={handleSubmit} className="flex justify-center flex-col bg-gray-900 px-8 py-8 rounded-lg border-white shadow-[10px_5px_rgb(255,255,255)] transition-all duration-[0.5s] ease-[ease-in-out] hover:shadow-[10px_5px_rgb(255,255,255)] hover:transition-all hover:duration-[0.25s] hover:ease-[ease-in-out]" id="borda1">


              <div className="flex BarradePesquisa mb-8">
                <button className="border-2 mx-1 text-white p-2 rounded-lg bg-[#00ff0059] hover:bg-green-500">LEFT</button>
                <button className="border-2 mx-1 text-white p-2 rounded-lg bg-[#00ff0059] hover:bg-green-500">RIGHT</button>
                
                <label className="pt-2 text-xl text-white ">Cliente:</label>
                <input type="text" className="mx-4 p-2 rounded-lg" onChange={handleChange}></input>
                <label className="pt-2 text-xl text-white">Placa:</label>
                <input type="text" className="mx-4 p-2 rounded-lg" onChange={handleChange}></input>
                <label className="pt-2 text-xl text-white">Cod:</label>
                <input type="text" className="mx-4 p-2 rounded-lg" onChange={handleChange}></input>
                <button className="bg-[#00ff0059] mx-8 border-2 text-white p-2 rounded-lg hover:bg-green-500">+</button>
              </div>


              <div className="grid grid-cols-10 gap-2">
                <div id="placa" className="m-1 flex flex-col ">
                  <label className="text-xl text-white" htmlFor='placa'>Placa:</label>
                  <input type="text" name="placa" id="placa" placeholder="" autocomplete="off" className="p-[10px] rounded-lg"
                    value={formData.placa}
                    onChange={handleChange}>  
                  </input>
                </div>

                <div id="carro" className="m-1 flex flex-col">
                  <label className="text-xl text-white" htmlFor='modelo'>Modelo:</label>
                  <input type="text" name="modelo" id="carro" placeholder="" autocomplete="off" className="p-[10px] rounded-lg"
                    value={formData.modelo}
                    onChange={handleChange}>
                    </input>
                </div>


                <div id="KM" className="m-1 flex flex-col">
                  <label className="text-xl text-white" htmlFor='km'>KM:</label>
                  <input type="text" name="km" id="km" placeholder="" autocomplete="off" className="p-[10px] rounded-lg"
                    value={formData.km}
                    onChange={handleChange}>
                    </input>
                </div>

                <div id="cliente" className="m-1 flex flex-col col-span-2">
                  <label className="text-xl text-white" htmlFor='cliente'>Cliente:</label>
                  <input type="text" name="cliente" id="cliente" placeholder="" autocomplete="off" className="p-[10px] rounded-lg"
                    value={formData.cliente}
                    onChange={handleChange}> 
                    </input>
                </div>
                <div id="vendedor" className="m-1 flex flex-col col-span-2">
                  <label className="text-xl text-white" htmlFor='vendendor'>Vendedor:</label>
                  <input type="text" name="vendedor" id="vendedor" placeholder="" autocomplete="off" className="p-[10px] rounded-lg"
                      value={formData.vendedor}
                      onChange={handleChange}>
                    </input>
                </div>

                <div id="nf" className="m-1 flex flex-col">
                  <label className="text-xl text-white">NF: {formData.nf}</label>
                </div>

                <div id="data" className="m-1 flex flex-col">
                  <label className="text-xl text-white">Data: {formData.data}</label>
                </div>
                <div id="cod" className="m-1 flex flex-col">
                  <label className="text-xl text-white">codigo: {formData.cod}</label>
                  
            
                </div>
                <div id="obs" className="m-1 flex flex-col col-span-10">
                  <label className="text-xl text-white">Obs:</label>
                  <input type="text" name="obs" id="obs" placeholder="" autocomplete="off" className="p-[10px] rounded-lg"
                    value={formData.obs}
                    onChange={handleChange}>
                    </input>
                </div>

                <div id="mercadoria" className="m-1 flex flex-col col-span-6">
                  <label className="text-xl text-white">Mercadoria:</label>
                  <input type="text" name="mercadoria" id="mercadoria" placeholder="" autocomplete="off" className="p-[10px] my-2 rounded-lg"
                    value={formData.mercadoria}
                    onChange={handleChange}>
                  </input>
                </div>

                <div id="qnt" className="m-1 flex flex-col col-span-1">
                  <label className="text-xl text-white">qnt:</label>
                  <input type="text" name="qnt" id="qnt" placeholder="" autocomplete="off" className="p-[10px] my-2 rounded-lg"
                    value={formData.qnt}
                    onChange={handleChange}>
                  </input>

                </div>

                <div id="preco" className="m-1 flex flex-col col-span-1">
                  <label className="text-xl text-white">preco:</label>
                  <input type="text" name="preco" id="preco" placeholder="" autocomplete="off" className="p-[10px] my-2 rounded-lg"
                    value={formData.preco}
                    onChange={handleChange}>
                    </input>
                </div>

                <div id="mecanico" className="m-1 flex flex-col col-span-1">
                  <label className="text-xl text-white">mecanico:</label>
                  <input type="text" name="mecanico" id="mecanico" placeholder="" autocomplete="off" className="p-[10px] my-2 rounded-lg"
                    value={formData.mecanico}
                    onChange={handleChange}>
                    </input>
                </div>



                <div id="mercadoria2" className="mx-1 flex flex-col col-span-6">
                  <input type="text" name="mercadoria2" id="mercadoria2" placeholder="" autocomplete="off" className="p-[10px] my-2 rounded-lg"
                    value={formData.mercadoria2}
                    onChange={handleChange}>
                    </input>
                </div>



                <div id="qnt2" className="mx-1 flex flex-col col-span-1">
                <input type="text" name="qnt2" id="qnt2" placeholder="" autocomplete="off" className="p-[10px] my-2 rounded-lg"
                    value={formData.qnt2}
                    onChange={handleChange}>
                  </input>
                </div>


                <div id="preco2" className="mx-1 flex flex-col col-span-1">
                <input type="text" name="preco2" id="preco2" placeholder="" autocomplete="off" className="p-[10px] my-2 rounded-lg"
                    value={formData.preco2}
                    onChange={handleChange}>
                </input>
                </div>

                <div id="mecanico2" className="mx-1 flex flex-col col-span-1">
                  <input type="text" name="mecanico2" id="mecanico2" placeholder="" autocomplete="off" className="p-[10px] my-2 rounded-lg"
                    value={formData.mecanico2}
                    onChange={handleChange}>
                    </input>
                </div>




                <div className="col-span-7"></div>

                <div id="desconto" className="mx-1 flex flex-col col-span-1">
                  <label className="text-xl text-white">desconto:</label>
                  <input type="text" name="desconto" id="desconto" placeholder="" autocomplete="off" className="p-[10px] my-2 rounded-lg"
                    value={formData.desconto}
                    onChange={handleChange}>
                    </input>
                </div>

                <div id="pagamentoValor" className="mx-1 flex flex-col col-span-2">
                  <label className="text-xl text-white">Preco:</label>
                    <h1 className="text-white p-[10px] my-2 rounded-lg">{formData.pagamentoValor}</h1>  
                </div>


                <div id="metodoPagamento" className="mx-1 flex flex-col col-span-1">
                  <label className="text-xl text-white">Metodo:</label>
                  <input type="text" name="metodoPagamento" id="metodoPagamento" placeholder="" autocomplete="off" className="p-[10px] my-2 rounded-lg"
                    value={formData.metodoPagamento}
                    onChange={handleChange}>
                    </input>
                </div>

                <div id="bandeira" className="m-1 flex flex-col col-span-1">
                  <label className="text-xl text-white">bandeira:</label>
                  <input type="text" name="bandeira" id="bandeira" placeholder="" autocomplete="off" className="p-[10px] my-2 rounded-lg"
                    value={formData.bandeira}
                    onChange={handleChange}>
                    </input>
                </div>

                <div id="parcelas" className="m-1 flex flex-col col-span-1">
                  <label className="text-xl text-white">Parcelas:</label>
                  <input type="text" name="parcelas" id="parcelas" placeholder="" autocomplete="off" className="p-[10px] my-2 rounded-lg"
                    value={formData.parcelas}
                    onChange={handleChange}>
                    </input>
                </div>

                <div id="pagamentoValor" className="m-1 flex flex-col col-span-1">
                  <label className="text-xl text-white">Preco:</label>
                  <h1 className="text-white p-[10px] my-2 rounded-lg">{formData.pagamentoValor}</h1>  
                </div>
              </div>

              <div className="flex justify-center pt-[25px]">
            
                <button type="submit" className="bg-[#00ff0059] border-2 text-white p-2 rounded-lg hover:bg-green-500">Salvar</button>
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