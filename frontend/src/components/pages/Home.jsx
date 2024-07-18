// API
import api from "../../utils/api";

// Hooks
import { useState, useEffect } from "react";

// React router dom
import { Link } from "react-router-dom";

// Estilos
import styles from "./Home.module.css";

// Icons
import { PiSealCheckFill } from "react-icons/pi";

// IMG
import backgroundImage from "../../assets/img/bck-home.jfif";
import backgroundImageTwo from "../../assets/img/bkg-home-two.jfif";

const Home = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    api.get("/pets").then((response) => {
      setPets(response.data.pets);
    });
  }, []);

  return (
    <div>
      <div className={styles.img}>
        <div className="animate__animated animate__lightSpeedInLeft">
          <img src={backgroundImage} alt="Imagem de fundo " />
        </div>
        <div className="animate__animated animate__lightSpeedInRight">
          <img src={backgroundImageTwo} alt="Imagem de fundo 2" />
        </div>
      </div>
      <div className={styles.pet_home_header}>
        <h1>Adote um Pet</h1>
        <p>Veja os detalhes de cada um e conheça o tutor deles</p>
      </div>
      <div className={styles.pet_container}>
        {pets.length > 0 &&
          pets.map((pet) => (
            <div className={styles.pet_card} key={pet._id}>
              <div
                style={{
                  backgroundImage: `url(${
                    import.meta.env.VITE_APP_API
                  }/images/pets/${pet.images[0]})`,
                }}
                className={styles.pet_card_image}></div>
              <h3>{pet.name}</h3>
              <p>
                <span className="bold">Peso:</span> {pet.weight}kg
              </p>
              {pet.available ? (
                <Link to={`pet/${pet._id}`}>Mais detalhes</Link>
              ) : (
                <p className={styles.adopted_text}>
                  {" "}
                  <PiSealCheckFill /> Adotado
                </p>
              )}
            </div>
          ))}
        {pets.length === 0 && (
          <p>Não há pets cadastrados ou disponíveis para adoção</p>
        )}
      </div>
    </div>
  );
};

export default Home;
