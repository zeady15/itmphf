import { NavLink } from "react-router-dom";

export function NotFound() {
  return (
    <div>
      <h2>404 – Az oldal nem található</h2>
      <NavLink to="/">Vissza a főoldalra</NavLink>
    </div>
  );
}