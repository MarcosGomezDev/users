import { NavLink } from "react-router-dom";

export const Index = () => {
  return (
    <div>
      <h1>Identifícate</h1>

      <button className="login-bt">
        <NavLink to="/users">Login</NavLink>
      </button>
    </div>
  );
};
