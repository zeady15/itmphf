import { useState, useEffect } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";

export function EditUser({ users, setUsers }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = users.find((u) => u.id === id);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers(users.map((u) => (u.id === id ? { ...u, name, email } : u)));
    navigate("/");
  };

  if (!user) return <h3>Nincs ilyen felhasználó! <NavLink to="/">Vissza</NavLink></h3>;

  return (
    <div>
      <h2>(PUT /users/{id})</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Név: </label><br />
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </p>
        <p>
          <label>Email: </label><br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </p>
        <button type="submit">Mentés</button> | 
        <button type="button" onClick={() => navigate("/")}> Mégse</button>
      </form>
    </div>
  );
}