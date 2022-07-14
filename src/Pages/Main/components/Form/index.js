import "./styles.css";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Form({ listTransactions, setListTransactions }) {
  const [descricaoFormInput, setDescricaoFromInput] = useState("");
  const [valorFromInput, setValorFromInput] = useState("");
  const [typeFromInput, setTypeFromInput] = useState("Entrada");

  const clearField = () => {
    setDescricaoFromInput("");
    setValorFromInput("");
    setTypeFromInput("Entrada");
  };

  const addTransaction = (e) => {
    e.preventDefault();

    let transactionObject = {
      description: descricaoFormInput,
      value: parseFloat(valorFromInput),
      type: typeFromInput,
    };
    setListTransactions([...listTransactions, transactionObject]);
    clearField();
  };

  return (
    <div className="pai-form">
      <div>
        <Toaster />
      </div>
      <form onSubmit={addTransaction}>
        <div className="form-descricao">
          <label>Descrição</label>
          <input
            autocomplete="off"
            onChange={(e) => setDescricaoFromInput(e.target.value)}
            className="input-descricao"
            type="text"
            name="descricao"
            placeholder="Digite aqui sua descrição"
            value={descricaoFormInput}
          />
          <p>Ex: Compra de roupas</p>
        </div>
        <div className="form-valor">
          <div className="valor">
            <label className="label-valor">Valor</label>
            <input
              onChange={(e) => setValorFromInput(e.target.value)}
              type="number"
              name="valor"
              placeholder="R$"
              className="input-valor"
              value={valorFromInput}
            ></input>
          </div>
          <div className="tipo-valor">
            <label>Tipo de valor</label>
            <select
              onChange={(e) => setTypeFromInput(e.target.value)}
              value={typeFromInput}
            >
              <option value="Entrada" selected={typeFromInput === "Entrada"}>
                Entrada
              </option>
              <option value="Despesa" selected={typeFromInput === "Despesa"}>
                Despesa
              </option>
            </select>
          </div>
        </div>
        <button
          className="form-button"
          type="submit"
          onClick={() => {
            toast.success("Adicionado com sucesso");
          }}
        >
          Inserir valor
        </button>
      </form>
    </div>
  );
}

export default Form;
