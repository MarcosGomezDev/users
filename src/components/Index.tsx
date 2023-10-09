import { NavLink } from "react-router-dom";

export const Index = () => {
  return (
    <div>
      <h1>Identifícate</h1>

      <div className="login-bt">
        <NavLink to="/users">Login</NavLink>
      </div>
    </div>
  );
};
