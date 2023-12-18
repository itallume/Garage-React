import { useState, useEffect } from 'react';
import { pedidos as ped, pedidos } from '../data/seed';
import ClienteForm from './ClienteForm';
import { useServico } from '../app/contexts/teste';
import Addproduto from './Addproduto'

export default function Form() {
  const {
    isVisibleCliente,
    toggleVisibilityCliente,
    toggleVisibility,
    adicionarProduto,
    addProdutos,
    Pedido,
    setPedido,
    createPedido,
    initialPedidoData
  } = useServico()

  
  const regexNumeros = /^[0-9]+$/
  const regexNome = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/
  const regexPlaca = /^[a-zA-Z0-9-]*$/
  const regexModelo = /^[a-zA-ZÀ-ÖØ-öø-ÿ0-9\s]*$/
  
  const componentes = Array.from({ length: addProdutos }, (_, index) => (
    <Addproduto key ={index} handleChange={handleChange} />));


  const handleChange = (event) => {
      let { name, value } = event.target;
      
      setPedido({ ...Pedido, [name]: value });
      console.log(Pedido)
    };
  
  const handleFormSubmit = async (event) => {
      event.preventDefault();
      setPedido({
        ...initialPedidoData,
      });
      event.preventDefault(); 
      await createPedido(Pedido); 
                                       
    };
    


  // useEffect(() => { // Atualize os produtos correspondentes sempre que o texto de entrada mudar
  //     const fetchMatchingProdutos = async () => {
  //       try {
  //       const { data, error } = await supabase
  //         .from('Produto')
  //         .select('Nome')
  //         .ilike('Nome', `${inputText}%`); // Busque por produtos que comecem com o texto de entrada
  //         console.log(data)
  //       if (error) {
  //         console.error('Erro ao buscar Produtos:', error.message);
  //         return;
  //       }

  //       setMatchingProdutos(data || []);
  //     } catch (error) {
  //       console.error('Erro na busca de produtos:', error.message);
  //     }
  //   };
          
  //   if (inputText.length > 0) {
  //     fetchMatchingProdutos();
  //   } else {
  //     setMatchingProdutos([]);
  //   }
  // }, [inputText]);

  // const leftclick = () => {
  //   cod = pedidos.length-1
  // }

  // const rightclick = () => {
  //   cod = pedidos.length+1
  // }

  // useEffect(() => { // Atualize o pagamentoValor sempre que os valores mudarem
  //   updateValores();
  //   setCurrentDate(); // devia estar em outro useEFfect
  // }, [Pedido.preco, Pedido.preco2, Pedido.qnt, Pedido.qnt2, Pedido.valorTotal1, Pedido.valorTotal2]);  // Dependências do efeito É POSSIVEL ADICIONAR + DE DUAS DEPENDECIAS????

  // const updateValores = () => {
  //   // Cálculo do pagamentoValor

  //   const valorTotal1 = 
  //   parseFloat(Pedido.preco * Pedido.qnt || 0)

  //   const valorTotal2 =
  //   parseFloat(Pedido.preco2 * Pedido.qnt2 || 0)

  //   const pagamentoValor =
  //     parseFloat(Pedido.valorTotal1 || 0) + parseFloat(Pedido.valorTotal2 || 0);

    

  //   // Atualize o estado com os novos valores
  //   setPedido((prevData) => ({
  //     ...prevData,
  //     valorTotal1: valorTotal1.toFixed(2),
  //     valorTotal2: valorTotal2.toFixed(2),
  //     pagamentoValor: pagamentoValor.toFixed(2),
  // }));
  // };

  // const setCurrentDate = () => {
  //   const currentDate = new Date();
  //   const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
    
    
  //   setPedido((prevData) => ({
  //     ...prevData,
  //     data: formattedDate,
  //   }));
  //   return formattedDate
  // };


  // const handleSubmit = async (e) => { // Manipulador de envio do formulário
  //   e.preventDefault(); // Evite que o formulário seja enviado

  // };
  
    // if (e.nativeEvent.submitter.id === 'save') {

    // const newPedido = {
      
    //   ...Pedido,
    //   data: setCurrentDate(),
    //   cod: pedidos.length + 1,
    //   nf: 1,
    //   preco: parseFloat(Pedido.preco || 0).toFixed(2), // Garanta que seja formatado como número de ponto flutuante com 2 casas decimais
    //   preco2: parseFloat(Pedido.preco2 || 0).toFixed(2), // Garanta que seja formatado como número de ponto flutuante com 2 casas decimais
    //   valorTotal1: parseFloat(Pedido.preco * Pedido.qnt || 0).toFixed(2), // Garanta que seja formatado como número de ponto flutuante com 2 casas decimais
    //   valorTotal2: parseFloat(Pedido.preco2 * Pedido.qnt2 || 0).toFixed(2), // Garanta que seja formatado como número de ponto flutuante com 2 casas decimais
    //   pagamentoValor: (parseFloat(Pedido.valorTotal1 || 0) + parseFloat(Pedido.valorTotal2 || 0)).toFixed(2), // Garanta que seja formatado como número de ponto flutuante com 2 casas decimais
    // };    



    // const { data, error } = await supabase.from('Pedidos').upsert([newPedido])


    // if (error) {
    //   console.error('Erro ao enviar dados para o Supabase:', error.message);
    // } else {
    //   console.log('Dados enviados com sucesso para o Supabase:', data);
    // }


    
    // pedidos.push(newPedido);
    // console.log(newPedido) // Adicione o novo pedido ao array de pedidos

    

    
  // const handleChange = (e) => { // Manipulador de alteração de formulário

  //   const { name, value } = e.target; // Extraia o nome e o valor do alvo
  //       setPedido((prevData) => ({ // Atualize o estado com o novo valor
  //         ...prevData, // Mantenha os valores anteriores
  //         [name]: value, // Atualize o valor do campo de entrada
  //       }))
  //      if (name === 'mercadoria') {
  //        setInputText(value);
  //      }
  //      updateValores();
  //    };

    return (
      <>
      {isVisibleCliente && <ClienteForm />}
      
      <main className="flex h-screen z-10">
        
      <div className="x w-1/6"></div>
      <section className="w-4/5 flex justify-center items-center flex-col">
        

        <section className="justify-center align-center" id="formulario">
          <div className="justify-center items-center pt-[30px]">
            <form onSubmit={(event) => handleFormSubmit(event)} className="flex justify-center flex-col bg-gray-900 px-8 py-8 rounded-lg border-white shadow-[10px_5px_rgb(255,255,255)] transition-all duration-[0.5s] ease-[ease-in-out] hover:shadow-[10px_5px_rgb(255,255,255)] hover:transition-all hover:duration-[0.25s] hover:ease-[ease-in-out]" id="borda1">

              <div className="grid grid-cols-10 gap-2">
                <div id="placa" className="m-1 flex flex-col ">
                  <label className="text-xl text-white" htmlFor='placa'>Placa:</label>
                  <input type="text" name="placa" id="placa" placeholder="" autoComplete="off" className="p-[10px] rounded-lg"
                    value={Pedido.placa}
                    onChange={handleChange}>  
                  </input>
                  {Pedido.placa !== '' && !regexPlaca.test(Pedido.placa) && (<p className='text-red-500'>Apenas letras números</p>)}

                </div>

                <div id="carro" className="m-1 flex flex-col">
                  <label className="text-xl text-white" htmlFor='modelo'>Modelo:</label>
                  <input type="text" name="modelo" id="carro" placeholder="" autoComplete="off" className="p-[10px] rounded-lg"
                    value={Pedido.modelo}
                    onChange={handleChange}>
                    </input>
                    {Pedido.modelo !== '' && !regexModelo.test(Pedido.modelo) && (<p className='text-red-500'>Apenas letras números</p>)}
                </div>
                

                <div id="KM" className="m-1 flex flex-col">
                  <label className="text-xl text-white" htmlFor='km'>KM:</label>
                  <input type="text" name="km" id="km" placeholder="" autoComplete="off" className="p-[10px] rounded-lg"
                    value={Pedido.km}
                    onChange={handleChange}>
                    </input>
                    {Pedido.km !== '' && !regexNumeros.test(Pedido.km) && (<p className='text-red-500'>Apenas numero em KM</p>)}
                </div>

                <div id="cliente" className="m-1 col-span-2 flex flex-col">
                    <label className="text-xl text-white" htmlFor='cliente'>Cliente:</label>
                    <div className='flex items-center'>

                      <input style={{ width: '200px' }} type="text" name="cliente" id="cliente" placeholder="" autoComplete="off" className="p-[10px] rounded-lg"
                        value={Pedido.cliente}
                        onChange={handleChange}> 
                      </input>  
                        
                      <button onClick={toggleVisibilityCliente} className="bg-[#00ff0059] border-2 text-white p-2 rounded-lg hover:bg-green-500">+</button>
                    </div>
                  {Pedido.cliente !== '' && !regexNome.test(Pedido.cliente) && (<p className='text-red-500'>Apenas letras</p>)}
                </div>


                <div id="vendedor" className="m-1 flex flex-col col-span-2">
                  <label className="text-xl text-white" htmlFor='vendendor'>Vendedor:</label>
                  <input type="text" name="vendedor" id="vendedor" placeholder="" autoComplete="off" className="p-[10px] rounded-lg"
                      value={Pedido.vendedor}
                      onChange={handleChange}>
                    </input>
                    {Pedido.vendedor !== '' && !regexNome.test(Pedido.vendedor) && (<p className='text-red-500'>Apenas letras</p>)}
                </div>

                <div id="data" className="m-1 flex flex-col">
                  <label className="text-xl text-white">Data: </label>
                  <h1 className="text-white pt-4">{Pedido.data}</h1>  
                </div>
                <div id="cod" className="m-1 flex flex-col">
                  <label className="text-xl text-white">codigo: </label>
                  <h1 className="text-white pt-4">(AutoComplet)</h1>  
            
                </div>
                <div id="obs" className="m-1 flex flex-col col-span-10">
                  <label className="text-xl text-white">Obs:</label>
                  <input type="text" name="obs" id="obs" placeholder="" autoComplete="off" className="p-[10px] rounded-lg"
                    value={Pedido.obs}
                    onChange={handleChange}>
                    </input>
                </div>
              
                <div className="m-1 flex col-span-2">
                  <button onClick={adicionarProduto} className="bg-[#00ff0059] justify-center border-2 text-white col-span-2 p-2 rounded-lg hover:bg-green-500">+</button>
          
                  <div>{componentes}</div>
                </div>
                
                <div className="col-span-8"></div>

                
                <div id="desconto" className="mx-1 flex flex-col col-span-1">
                  <label className="text-xl text-white">Desconto:</label>
                  <input type="text" name="desconto" id="desconto" placeholder="" autoComplete="off" className="p-[10px] my-2 rounded-lg"
                    value={Pedido.desconto}
                    onChange={handleChange}>
                    </input>
                </div>

                <div id="metodoPagamento" className="m-1 flex flex-col col-span-1">
                  <label className="text-xl text-white">Método:</label>
                  <input type="text" name="metodoPagamento" id="metodoPagamento" placeholder="" autoComplete="off" className="p-[10px] my-2 rounded-lg"
                    value={Pedido.metodoPagamento}
                    onChange={handleChange}>
                    </input>
                </div>

                <div id="bandeira" className="m-1 flex flex-col col-span-1">
                  <label className="text-xl text-white">Bandeira:</label>
                  <input type="text" name="bandeira" id="bandeira" placeholder="" autoComplete="off" className="p-[10px] my-2 rounded-lg"
                    value={Pedido.bandeira}
                    onChange={handleChange}>
                    </input>
                </div>

                <div id="parcelas" className="m-1 flex flex-col col-span-1">
                  <label className="text-xl text-white">Parcelas:</label>
                  <input type="text" name="parcelas" id="parcelas" placeholder="" autoComplete="off" className="p-[10px] my-2 rounded-lg"
                    value={Pedido.parcelas}
                    onChange={handleChange}>
                    </input>
                </div>

              </div> 

              <div className="flex justify-center pt-[25px]">
            
                <button id="save" type='submit' className="bg-[#00ff0059] border-2 text-white p-2 rounded-lg hover:bg-green-500">Salvar</button>
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