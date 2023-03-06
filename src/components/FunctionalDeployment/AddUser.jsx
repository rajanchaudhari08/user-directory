import Card from "../UserInterface/Card";
import styles from "../FunctionalDeployment/AddUser.module.css";
import Button from "../UserInterface/Button";
import { useState, Fragment, useRef } from "react";
import ErrorModal from "../UserInterface/ErrorModal";

const AddUser = (properties) => {
  // const [inputUsername, setInputUsername] = useState("");
  // const [inputAge, setInputAge] = useState("");
  const [error, setError] = useState();

  const refInputUsername = useRef();
  const refInputAge = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();
    // console.log(refInputUsername.current.value);
    const inputUserName = refInputUsername.current.value;
    const inputUserAge = refInputAge.current.value;

    if (inputUserName.trim().length === 0 || inputUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid username and age (non-empty values).",
      });
      return;
    }
    if (+inputUserAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (non-empty value).",
      });
      return;
    }
    // console.log(inputUsername, inputAge);
    properties.onAddUser(inputUserName, inputUserAge);
    // setInputUsername("");
    // setInputAge("");
    refInputUsername.current.value = "";
    refInputAge.current.value = "";
  };
  /*
  const usernameChangeHandler = (event) => {
    setInputUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setInputAge(event.target.value);
  };
   */
  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            // value={inputUsername}
            id="username"
            // onChange={usernameChangeHandler}
            ref={refInputUsername}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            // value={inputAge}
            id="age"
            // onChange={ageChangeHandler}
            ref={refInputAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
