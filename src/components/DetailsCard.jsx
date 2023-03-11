import React from "react";
import styles from "./DetailsCard.module.scss";

const DetailsCard = ({ uri }) => {
  console.log(uri);
  return (
    <div className={styles.main}>
      <h2>{uri?.label}</h2>
      <img src={uri?.image} alt="" />
      <h4>
        {uri?.mealType?.map((meal) => {
          return <span>{meal}</span>;
        })}
      </h4>
      <ul className={styles.ingredients}>
        {uri?.ingredients?.map((ingredient) => {
          return (
            <li>
              <span>{ingredient.text}</span>
              🥄
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DetailsCard;
