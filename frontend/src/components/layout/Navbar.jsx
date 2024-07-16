// React Router Dom
import { Link } from "react-router-dom";

// Hooks
import { useContext } from "react";

// Estilos
import styles from "./Navbar.module.css";

// Logo
import Logo from "../../assets/img/logo.png";

// Context
import { Context } from "../../context/UserContext";

// Icons
import { LuDog, LuLogOut } from "react-icons/lu";
import { RiLoginCircleLine } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import { BiSolidCat } from "react-icons/bi";

const Navbar = () => {
  const { authenticated, logout } = useContext(Context);

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
        {authenticated ? (
          <>
            <li>
              <Link to="/pet/mypets">
                <BiSolidCat /> Meus Pets
              </Link>
            </li>
            <li>
              <Link to="/user/profile">
                <FaUserEdit /> Perfil
              </Link>
            </li>
            <li className={styles.logout_btn} onClick={logout}>
              <LuLogOut /> Sair
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">
                <RiLoginCircleLine /> Entrar
              </Link>
            </li>
            <li>
              <Link to="/register">Cadastrar</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
