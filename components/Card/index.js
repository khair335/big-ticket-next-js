// components/Card/index.js
import React from "react";
import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <h2>Card Title</h2>
      <p>This is some static text inside the card.</p>
    </div>
  );
};

export default Card;
