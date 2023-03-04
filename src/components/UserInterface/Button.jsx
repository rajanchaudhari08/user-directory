import styles from "../UserInterface/Button.module.css";

const Button = (properties) => {
  return (
    <button
      className={styles.button}
      type={properties.type || "button"}
      onClick={properties.onClick}
    >
      {properties.children}
    </button>
  );
};

export default Button;
