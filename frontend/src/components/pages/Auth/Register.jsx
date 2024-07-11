import Input from "../../form/Input.jsx";

const Register = () => {
  const handleChange = (e) => {};

  return (
    <div>
      <h1>Registrar</h1>
      <form>
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
    </div>
  );
};

export default Register;
