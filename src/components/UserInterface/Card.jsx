import styles from "../UserInterface/Card.module.css";

const Card = (properties) => {
  return (
    <div className={`${styles.card} ${properties.className}`}>
      {properties.children}
    </div>
  );
};

export default Card;
