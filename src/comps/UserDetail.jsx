import { useParams, NavLink } from "react-router-dom";

export function UserDetail({ users }) {
  const { id } = useParams();
  const user = users.find((u) => u.id === id);

  if (!user) {
    return <h3>Nincs ilyen felhasználó! <NavLink to="/">Vissza</NavLink></h3>;
  }

  return (
    <div>
      <h2>(GET /users/{id})</h2>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Név:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <br />
      <NavLink to="/">Vissza a listához</NavLink>
    </div>
  );
}