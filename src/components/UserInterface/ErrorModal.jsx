import Card from "../UserInterface/Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (properties) => {
  return <div className={styles.backdrop} onClick={properties.onConfirm} />;
};

const Overlay = (properties) => {
  return (
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
  );
};

const ErrorModal = (properties) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={properties.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay
          title={properties.title}
          message={properties.message}
          onConfirm={properties.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default ErrorModal;
