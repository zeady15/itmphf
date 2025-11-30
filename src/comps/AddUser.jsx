import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function AddUser({ users, setUsers }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = String(Math.max(...users.map(u => +u.id)) + 1);
    setUsers([...users, { id: newId, name, email }]);
    navigate("/");
  };

  return (
    <div>
      <h2>(POST /users)</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Név: </label><br />
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </p>
        <p>
          <label>Email: </label><br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </p>
        <button type="submit">Hozzáadás</button> | 
        <button type="button" onClick={() => navigate("/")}> Mégse</button>
      </form>
    </div>
  );
}