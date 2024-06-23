import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';
import styles from '../styles/CharacterPage.module.css';

export default function CharacterPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const {
    id,
    name,
    images,
    gender,
    species,
    homePlanet,
    occupation,
    sayings,
  } = state.character;

  const charName = `${name.first} ${name.middle} ${name.last}`;
  let newSpecies = species;
  let newHomePlanet = homePlanet;

  if (!species || species === 'undefined') {
    newSpecies = 'Unknown';
  }
  if (!homePlanet || homePlanet === 'undefined') {
    newHomePlanet = 'Unknown';
  }

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.generalContainer}>
      <div className={styles.header}>
        <FaArrowLeft size={48} onClick={handleGoBack} className={styles.icon} />
      </div>
      <div className={styles.mainContent}>
        <div className={styles.leftContent}>
          <img src={images.main} alt={charName} className={styles.charImg} />
        </div>
        <div className={styles.rightContent}>
          <div className={styles.titleContainer}>
            <h1>
              {charName}
            </h1>
          </div>
          <div className={styles.description}>
            <p>
              {`Planet: ${newHomePlanet}`}
            </p>
            <p>
              {`Species: ${newSpecies}`}
            </p>
            <p>
              {`Gender: ${gender}`}
            </p>
            <p>
              {`Occupation: ${occupation}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
