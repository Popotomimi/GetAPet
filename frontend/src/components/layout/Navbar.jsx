// React Router Dom
import { Link } from "react-router-dom";

// Estilos
import styles from "./Navbar.module.css";

// Logo
import Logo from "../../assets/img/logo.png";

// Icons
import { LuDog } from "react-icons/lu";
import { RiLoginCircleLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <img src={Logo} alt="Get a Pet" />
        <h2>Get A Pet</h2>
      </div>
      <ul>
        <li>
          <Link to="/">
            <LuDog /> Adotar
          </Link>
        </li>
        <li>
          <Link to="/login">
            <RiLoginCircleLine /> Entrar
          </Link>
        </li>
        <li>
          <Link to="/register">Cadastrar</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
