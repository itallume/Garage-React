import { useServico } from "../app/contexts/teste"
import CardProdutoConsulta from "./CardProdutoConsulta"
import { useEffect, useState } from "react"
export default function ConsultaProduto(){
    const{
        loadProduto,
        Produto,
        showCard,
        visibilityCard
    } = useServico()

    useEffect(() => {
    loadProduto(),[]})  

    const [input, setInput] = useState({Nome: ""})

    const [result, setResult] = useState([])

    const handleChange = (event) => {
        let { name, value } = event.target;
        setInput({ ...input, [name]: value });

        let ProdutoFiltrado = Produto.filter((Produto) => Produto.Nome.toUpperCase().includes(input.Nome.toUpperCase()))
        setResult(ProdutoFiltrado)
        console.log(ProdutoFiltrado)
      };
    return (<>
            <section>
                <div className="items-center pt-[30px]">
            
                    <form className="flex flex-col h-[20rem] w-[20rem] justify-center items-center bg-gray-900 rounded-lg border-white shadow-[10px_5px_rgb(255,255,255)]">
                        <div
                            id="NomeProduto"
                            className="m-1 flex flex-col mr-[15px] mb-[15px]"
                        >
                            <label className="text-xl text-white" htmlFor="nomeProduto">
                                Nome Produto:
                            </label>
                            <input
                            onChange={handleChange}
                            type="text"
                            name="Nome"
                            id="nomeProduto"
                            placeholder=""
                            autoComplete="off"
                            className="p-[10px] rounded-lg bg-white"
                            />
                        </div>
                        <div className="flex justify-center pt-[25px]">
                            <input
                                onClick={visibilityCard}
                                type="button"
                                defaultValue="Consultar"
                                name="btn"
                                id="button"
                                className="bg-white p-2 rounded-lg active:bg-[#00ff0059]"
                            />
                        </div>
                    </form>
                </div>
            </section>
            <section>
                {showCard && <CardProdutoConsulta result={result[0]}/>}
            </section>
    </>)}