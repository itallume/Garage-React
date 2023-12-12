

export default function Opcoes( { toggleToFalse, toggleToTrue } ){
    return (<>
    <div className=" flex items-center justify-center mt-4 bg-slate-900 rounded-full w-[450px]">
          <div className="m-4 flex cursor-pointer items-center">
            
            <p className="m-2 rounded-full text-white text-xl hover:text-[#FCA311]" onClick={toggleToTrue}>Cadastrar Serviço</p>
        
          </div>

          <div className="m-4 flex text-white items-center cursor-pointer hover:text-[#FCA311]"> 

            <p className="m-2 rounded-full text-xl" onClick={toggleToFalse}>Cadastrar Produto</p>
            
          </div>
      </div>
    </>)
}