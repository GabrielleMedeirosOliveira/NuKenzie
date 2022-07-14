import "./styles.css";
import Card from "../Card/index";
import NoCardImg from "../../../../imgs/NoCard.svg";
import { useState } from "react";

function List({ listTransactions, setListTransactions }) {
  const [isFiltered, setIsFiltered] = useState(false);
  const [arrFilter, setArrFilter] = useState([...listTransactions]);

  function noCard() {
    return (
      <>
        <h1>Você ainda não possui nenhum lançamento</h1>
        <img src={NoCardImg} alt="Sem lançamentos" />
      </>
    );
  }

  const handleFiltro = (filtroBotao) => {
    filtroBotao !== "todos" ? setIsFiltered(true) : setIsFiltered(false);

    setArrFilter(
      listTransactions.filter((transaction) => transaction.type === filtroBotao)
    );
  };

  const handleDeletar = (transactionRecebida) => {
    setListTransactions(
      listTransactions.filter(
        (transaction) => transaction !== transactionRecebida
      )
    );
  };

  return (
    <section className="right-col col">
      <div className="list-header">
        <h3 className="list-title">Resumo financeiro</h3>
        <div className="list-buttons">
          <button
            className="todos"
            autoFocus
            onClick={() => handleFiltro("todos")}
          >
            Todos
          </button>
          <button className="entradas" onClick={() => handleFiltro("Entrada")}>
            Entradas
          </button>
          <button className="despesas" onClick={() => handleFiltro("Despesa")}>
            Despesas
          </button>
        </div>
      </div>
      {listTransactions.length === 0
        ? noCard()
        : isFiltered === false
        ? listTransactions.map((transaction, index) => (
            <Card
              handleDeletar={handleDeletar}
              transaction={transaction}
              key={index}
            />
          ))
        : arrFilter.map((transaction, index) => (
            <Card
              handleDeletar={handleDeletar}
              transaction={transaction}
              key={index}
            />
          ))}
    </section>
  );
}
export default List;
