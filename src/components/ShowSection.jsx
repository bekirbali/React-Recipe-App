import React from "react";
import styles from "./ShowSection.module.scss";
import { useNavigate } from "react-router-dom";

const ShowSection = ({ advancedData, data }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.main}>
      {advancedData &&
        advancedData.map((recipe, i) => {
          return (
            <div className={styles.info} key={i}>
              <h3>{recipe.recipe.label.split("recipes")}</h3>
              <img
                src={recipe.recipe.image}
                alt={recipe.recipe.label}
                onClick={() => navigate()}
              />
            </div>
          );
        })}
      {data &&
        data.map((recipe, i) => {
          return (
            <div className={styles.info} key={i}>
              <h3>{recipe.recipe.label.split("recipes")}</h3>
              <img
                src={recipe.recipe.image}
                alt={recipe.recipe.label}
                onClick={() =>
                  navigate(`/details/${recipe.recipe.uri.split("/")}}`, {
                    state: recipe.recipe,
                  })
                }
              />
            </div>
          );
        })}
    </div>
  );
};

export default ShowSection;
