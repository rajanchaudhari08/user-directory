import Card from "../UserInterface/Card";
import styles from "../FunctionalDeployment/UsersList.module.css";

const UsersList = (properties) => {
  return (
    <Card className={styles.users}>
      <ul>
        {properties.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
