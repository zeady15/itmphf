import { useNavigate } from "react-router-dom";

export function UserList({ users, setUsers }) {
  const navigate = useNavigate();

  const deleteUser = (id) => {
    if (window.confirm("Törlöd ezt a felhasználót?")) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  return (
    <div>
      <h2>(GET /users)</h2>

      <table border="1" cellPadding="10" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Név</th>
            <th>Email</th>
            <th>Műveletek</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => navigate(`/user/${user.id}`)}>Részletek</button>{" "}
                <button onClick={() => navigate(`/edit/${user.id}`)}>Szerkesztés</button>{" "}
                <button onClick={() => deleteUser(user.id)} style={{ background: "red", color: "white" }}>
                  Törlés
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}