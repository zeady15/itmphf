import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { usersData } from "./data/user";
import { UserList } from "./components/UserList";
import { UserDetail } from "./components/UserDetail";
import { AddUser } from "./components/AddUser";
import { EditUser } from "./components/EditUser";
import { NotFound } from "./components/NF";

function App() {
  const [users, setUsers] = useState(usersData);

  return (
    <Router>
      <div>
        <h1>Users</h1>

        <nav>
          <NavLink to="/">Főoldal</NavLink>
          <NavLink to="/add">Új felhasználó</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<UserList users={users} setUsers={setUsers} />} />
          <Route path="/user/:id" element={<UserDetail users={users} />} />
          <Route path="/add" element={<AddUser users={users} setUsers={setUsers} />} />
          <Route path="/edit/:id" element={<EditUser users={users} setUsers={setUsers} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;