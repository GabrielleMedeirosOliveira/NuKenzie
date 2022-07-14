import { useNavigate } from "react-router-dom";
import "./styles.css";
import logo from "../../../../imgs/Nu-Kenzie-Black.svg";

function Header() {
  let navigate = useNavigate();

  const handleButton = () => {
    navigate(`/`);
  };

  return (
    <header className="Header">
      <img src={logo} alt="Nu Kenzie Logo" />
      <button className="inicio" onClick={handleButton}>
        Início
      </button>
    </header>
  );
}

export default Header;
