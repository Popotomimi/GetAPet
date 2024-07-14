import { useContext, useState } from "react";

import Input from "../../form/Input.jsx";
import { Link } from "react-router-dom";

import styles from "../../form/Form.module.css";

/*  Contexts */
import { Context } from "../../../context/UserContext.jsx";

const Register = () => {
  const [user, setUser] = useState({});
  const { register } = useContext(Context);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(user);
  };

  return (
    <div className={styles.form_container}>
      <h1>Registrar</h1>
      <form onSubmit={handleSubmit}>
        <Input
          text="Nome"
          type="text"
          name="name"
          placeholder="Digite o seu nome"
          handleOnChange={handleChange}
        />
        <Input
          text="Telefone"
          type="text"
          name="phone"
          placeholder="Digite o seu Telefone"
          handleOnChange={handleChange}
        />
        <Input
          text="E-mail"
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
        <Input
          text="Confirmação de senha"
          type="password"
          name="confirmpassword"
          placeholder="Confirme sua senha"
          handleOnChange={handleChange}
        />
        <input type="submit" value="Cadastrar" />
      </form>
      <p>
        Já tem conta? <Link to="/login">Clique aqui!</Link>
      </p>
    </div>
  );
};

export default Register;
