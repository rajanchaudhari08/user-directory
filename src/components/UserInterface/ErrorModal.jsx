import Card from "../UserInterface/Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
const ErrorModal = (properties) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={properties.onConfirm} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{properties.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{properties.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={properties.onConfirm}>Ok</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
