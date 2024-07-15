// Hooks
import { useState, useContext } from "react";
import { Link } from "react-router-dom";

// Components
import Input from "../../form/Input";

// Estilos
import styles from "../../form/Form.module.css";

// Context
import { Context } from "../../../context/UserContext";

const Login = () => {
  const [user, setUser] = useState({});
  const { login } = useContext(Context);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(user);
  };

  return (
    <div className={styles.form_container}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          text="Email"
          type="email"
          name="email"
          placeholder="Digite o seu e-mail"
          handleOnChange={handleChange}
        />
        <Input
          text="Senha"
          type="password"
          name="password"
          placeholder="Digite a sua senha"
          handleOnChange={handleChange}
        />
        <input type="submit" value="Entrar" />
        <p>
          Não tem conta? <Link to="/register">Clique aqui!</Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
