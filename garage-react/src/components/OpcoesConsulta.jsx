


export default function OpcoesConsulta({ titulo1, titulo2, titulo3, selectConsulta, changeToServico, changeToProduto, changeToCliente}){
    
    return (<>
    <div className=" flex items-center justify-center mt-4 bg-slate-900 rounded-full w-[450px]">
          <div className="m-4 flex cursor-pointer items-center">
            
            <p className="m-2 rounded-full text-white text-xl hover:text-[#FCA311]" onClick={changeToServico}>{titulo1}</p>
        
          </div>

          <div className="m-4 flex text-white items-center cursor-pointer hover:text-[#FCA311]"> 

            <p className="m-2 rounded-full text-xl" onClick={changeToProduto}>{titulo2}</p>
            
          </div>

          <div className="m-4 flex text-white items-center cursor-pointer hover:text-[#FCA311]"> 

            <p className="m-2 rounded-full text-xl" onClick={changeToCliente}>{titulo3}</p>
            
          </div>
    </div>

    </>)
}