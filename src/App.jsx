import "./App.css";
import AddUser from "./components/FunctionalDeployment/AddUser";
import UsersList from "./components/FunctionalDeployment/UsersList";
import { useState, Fragment } from "react";

const App = () => {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (userName, userAge) => {
    setUsersList((previousUsersList) => {
      return [
        ...previousUsersList,
        {
          name: userName,
          age: userAge,
          id: Math.random().toString(),
        },
      ];
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
};

export default App;
