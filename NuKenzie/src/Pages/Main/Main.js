import { useState } from "react";

import "./styles.css";
import Form from "./components/Form/index";
import Header from "./components/Header/index";
import List from "./components/List/index";
import TotalMoney from "./components/TotalMoney/index";

function Main() {
  const [listTransactions, setListTransactions] = useState([]);

  return (
    <div className="Main">
      <Header />
      <main className="container">
        <section className="left-col col">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          ></Form>
          <TotalMoney listTransactions={listTransactions}></TotalMoney>
        </section>
        <List
          setListTransactions={setListTransactions}
          listTransactions={listTransactions}
        ></List>
      </main>
    </div>
  );
}

export default Main;
