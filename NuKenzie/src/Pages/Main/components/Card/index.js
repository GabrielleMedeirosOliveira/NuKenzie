import "./styles.css";
import { FaTrash } from "react-icons/fa";

function Card({ transaction, handleDeletar }) {
  return (
    <div
      className={
        transaction.type === "Entrada"
          ? "borda-verde Card"
          : "borda-vermelha Card"
      }
    >
      <div className="descricao">
        <p className="card-titulo">{transaction.description}</p>
        <p className="card-entrada">{transaction.type}</p>
      </div>
      <div className="card-numero">
        <p className="card-money">R$ {transaction.value}</p>
        <button className="deletar" onClick={() => handleDeletar(transaction)}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default Card;
