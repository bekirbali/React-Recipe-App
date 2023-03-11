import React from "react";
import styles from "./AboutCard.module.scss";

const AboutCard = () => {
  return (
    <div className={styles.about}>
      <img
        src="https://avatars.githubusercontent.com/u/95312891?v=4"
        alt="me"
      />
      <p>
        "As a Frontend Developer, I approach creating my recipes with the same
        attention to detail as a chef. React.js, JavaScript, HTML, CSS, SCSS,
        Tailwind, and Bootstrap are like the ingredients on a chef's table to
        me. By combining these ingredients in the right way, I create an
        impressive website to showcase my recipes. This shows my passion for
        both cooking and coding, paying attention to details to achieve great
        results in both."
      </p>
      <h4>-Bekir Furkan BALI</h4>
    </div>
  );
};

export default AboutCard;
