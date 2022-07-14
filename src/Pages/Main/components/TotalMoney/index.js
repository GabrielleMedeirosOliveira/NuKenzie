import "./styles.css";

function TotalMoney({ listTransactions }) {
  return (
    <div className="total-money">
      <p className="valor-total">Valor total:</p>
      <p className="numero">
        R${" "}
        {listTransactions.length === 0
          ? 0
          : listTransactions
              .map((transition) => {
                if (transition.type === "Despesa") {
                  return transition.value * -1;
                } else {
                  return transition.value;
                }
              })
              .reduce((acc, valorAtual) => {
                return Number(valorAtual) + acc;
              })}
      </p>
    </div>
  );
}
export default TotalMoney;
