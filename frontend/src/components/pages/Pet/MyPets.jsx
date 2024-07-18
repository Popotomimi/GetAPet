// API
import api from "../../../utils/api";

// Hooks
import { useState, useEffect } from "react";

// Custom hooks
import useFlashMessage from "../../../hooks/useFlashMessage";

// Components
import { Link } from "react-router-dom";
import Roundedimage from "../../layout/Roundedimage";

// Estilos
import styles from "./Dashboard.module.css";

// Icons
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { PiSealCheckDuotone } from "react-icons/pi";

const MyPets = () => {
  const [pets, setPets] = useState([]);
  const [token] = useState(localStorage.getItem("token") || "");
  const { setFlashMessage } = useFlashMessage();

  useEffect(() => {
    const hasReloaded = localStorage.getItem("hasReloaded");

    if (!hasReloaded) {
      localStorage.setItem("hasReloaded", "true");
      window.location.reload();
    }
  }, []);

  useEffect(() => {
    api
      .get("/pets/mypets", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setPets(response.data.pets);
      });
  }, [token]);

  async function removePet(id) {
    let msgType = "success";

    const data = await api
      .delete(`/pets/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        const updatedPets = pets.filter((pet) => pet._id !== id);
        setPets(updatedPets);
        return response.data;
      })
      .catch((err) => {
        msgType = "error";
        return err.response.data;
      });

    setFlashMessage(data.message, msgType);
  }

  const concludeAdoption = async (id) => {
    let msgType = "success";

    const data = await api
      .patch(`/pets/conclude/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        msgType = "error";
        return err.response.data;
      });

    setFlashMessage(data.message, msgType);
  };

  return (
    <div>
      <div className={styles.petlist_header}>
        <h1>Meus Pets</h1>
        <Link to="/pet/add">Cadastrar Pet</Link>
      </div>
      <div className={styles.petlist_container}>
        {pets.length > 0 &&
          pets.map((pet) => (
            <div className={styles.petlist_row} key={pet._id}>
              <div className="animate__animated animate__rollIn">
                <Roundedimage
                  src={`${import.meta.env.VITE_APP_API}/images/pets/${
                    pet.images[0]
                  }`}
                  alt={pet.name}
                  width="px120"
                />
              </div>
              <span className="bold">{pet.name}</span>
              <div className={styles.actions}>
                {pet.available ? (
                  <>
                    {pet.adopter && (
                      <button
                        className={styles.conclude}
                        onClick={() => {
                          concludeAdoption(pet._id);
                        }}>
                        {" "}
                        <PiSealCheckDuotone /> Concluir adoção
                      </button>
                    )}
                    <Link to={`/pet/edit/${pet._id}`}>
                      <FaEdit /> Editar
                    </Link>
                    <button
                      onClick={() => {
                        removePet(pet._id);
                      }}
                      className={styles.delete}>
                      {" "}
                      <FaTrashAlt /> Excluir
                    </button>
                  </>
                ) : (
                  <p>Pet já adotado</p>
                )}
              </div>
            </div>
          ))}
        {pets.length === 0 && <p>Não há Pets cadastrados...</p>}
      </div>
    </div>
  );
};

export default MyPets;
