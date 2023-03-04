import Card from "../UserInterface/Card";
import styles from "../FunctionalDeployment/AddUser.module.css";
import Button from "../UserInterface/Button";
import { useState } from "react";
import ErrorModal from "../UserInterface/ErrorModal";

const AddUser = (properties) => {
  const [inputUserame, setInputUsername] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (inputUserame.trim().length === 0 || inputAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid username and age (non-empty values).",
      });
      return;
    }
    if (+inputAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (non-empty value).",
      });
      return;
    }
    // console.log(inputUserame, inputAge);
    properties.onAddUser(inputUserame, inputAge);
    setInputUsername("");
    setInputAge("");
  };

  const usernameChangeHandler = (event) => {
    setInputUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setInputAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
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
            value={inputUserame}
            id="username"
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            value={inputAge}
            id="age"
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
