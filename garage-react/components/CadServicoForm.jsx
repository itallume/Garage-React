export default function CadServicoForm(){
    return (<>
    <section>
  <div className="items-center pt-[30px]">
    <form
      className="flex justify-center bg-[#574F73] px-24 py-12 rounded-lg"
      id="borda1"
    >
      {/* Conteúdo do retângulo */}
      <div className="">
        <div className="grid grid-cols-2">
          <div
            id="NomeProduto"
            className="m-1 flex flex-col mr-[15px] mb-[15px]"
          >
            <label className="text-xl text-black" htmlFor="nomeProduto">
              Nome do Produto:
            </label>
            <input
              type="text"
              name="nomeProduto"
              id="nomeProduto"
              placeholder=""
              autoComplete="off"
              className="p-[10px] rounded-lg bg-black"
            />
          </div>
          <div
            id="fabricante"
            className="m-1 flex flex-col mr-[15px] mb-[15px]"
          >
            <label className="text-xl text-black" htmlFor="fabricante">
              Fabricante:
            </label>
            <input
              type="text"
              name="fabricante"
              id="fabricante"
              placeholder=""
              autoComplete="off"
              className="p-[10px] rounded-lg bg-black"
            />
          </div>
          <div
            id="Fornecedor"
            className="m-1 flex flex-col mr-[15px] mb-[15px]"
          >
            <label htmlFor="Fornecedor" className="text-xl text-black">
              Fornecedor:
            </label>
            <select
              name="Fornecedor"
              id="Fornecedor"
              className="p-[10px] rounded-lg bg-black"
            >
              <option value="Master_Auto_Parts">Master Auto Parts</option>
              <option value="CarroPeças_Brasil">CarroPeças Brasil</option>
              <option value="Nova_Autopeças">Nova Autopeças</option>
              <option value="Carro_&_Cia_Distribuidora">
                Carro &amp; Cia Distribuidora
              </option>
            </select>
          </div>
          <div
            id="valorProduto"
            className="m-1 flex flex-col mr-[15px] mb-[15px]"
          >
            <label className="text-xl text-black" htmlFor="valorProduto">
              Valor de custo:
            </label>
            <input
              type="text"
              name="valorProduto"
              id="valorProduto"
              placeholder=""
              autoComplete="off"
              className="p-[10px] rounded-lg bg-black"
            />
          </div>
          <div
            id="porcentagem_lucroProduto"
            className="m-1 flex flex-col mr-[15px] mb-[15px]"
          >
            <label
              className="text-xl text-black"
              htmlFor="porcentagem_lucroProduto"
            >
              Porcentagem de lucro:
            </label>
            <input
              type="text"
              name="porcentagem_lucroProduto"
              id="porcentagem_lucroProduto"
              placeholder=""
              autoComplete="off"
              className="p-[10px] rounded-lg bg-black"
            />
          </div>
          <div id="IdProtudo" className="m-1 flex flex-col mr-[15px] mb-[15px]">
            <label className="text-xl text-black" htmlFor="IdProduto">
              Código do Produto:
            </label>
            <input
              type="text"
              readOnly="readonly"
              defaultValue="(AutoNumeração)"
              name="IdProduto"
              id="IdProduto"
              placeholder=""
              autoComplete="off"
              className="p-[10px] rounded-lg bg-black"
            />
          </div>
        </div>
        <div
          id="DescricaoProduto"
          className="m-1 flex flex-col mr-[15px] mb-[15px]"
        >
          <label className="text-xl text-black" htmlFor="DescricaoProduto">
            Descriçao do Produto:
          </label>
          <textarea
            type="text"
            name="DescricaoProduto"
            id="DescricaoProduto"
            placeholder=""
            autoComplete="off"
            className="p-[10px] rounded-lg bg-black "
            rows={3}
            defaultValue={"             \n                "}
          />
        </div>
        <div className="flex justify-center pt-[25px]">
          <input
            type="button"
            defaultValue="Salvar"
            name="btn"
            id="button"
            className="bg-zinc-800 p-2 rounded-lg active:bg-[#00ff0059]"
          />
        </div>
      </div>
    </form>
  </div>
</section>
</>)}