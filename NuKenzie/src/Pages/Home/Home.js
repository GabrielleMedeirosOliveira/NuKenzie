import { useNavigate } from "react-router-dom";
import "./Home.css";
import dashboard from "../../imgs/ElipseHome.svg";
import Logo from "../../imgs/Nu Kenzie.svg";

function Home() {
  let navigate = useNavigate();

  const handleButton = () => {
    navigate(`/main`);
  };

  return (
    <main className="main-home">
      <section className="col left-col">
        <img src={Logo} alt="Nu Kenzie Logo"></img>
        <h1>Centralize o controle das suas finanças</h1>
        <p>de forma rápida e segura</p>
        <button onClick={handleButton}>Iniciar</button>
      </section>
      <section className="col right-col">
        <img src={dashboard} alt="Imagem de um card de Finanças"></img>
      </section>
    </main>
  );
}

export default Home;
