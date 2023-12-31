import { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, logout } from "../features/data/userSlice";

export const Login: FC = () => {
  const url: string = "https://reqres.in/api/login";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [emailInp, setemailInp] = useState<string>("");
  const [passwordInp, setPasswordInp] = useState<string>("");
  const token: string = useSelector((state: any) => state.userLog.token);
  const loggedIn: boolean = useSelector((state: any) => state.userLog.loggedIn);

  const handleLogin = async () => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailInp,
          password: passwordInp,
        }),
      });
      const data = await response.json();
      if (response.ok && data.token) {
        dispatch(
          login({
            token: data.token,
            loggedIn: true,
          })
        );
        navigate("/users");
      } else {
        dispatch(logout());
      }
    } catch (error) {
      dispatch(logout());
    }
  };

  useEffect(() => {
    console.log(token);
    console.log(loggedIn);
  }, []);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="login">
      <h1 className="headers">Login Here</h1>
      <form className="contact">
        <input
          type="email"
          placeholder="Email"
          value={emailInp}
          onChange={(e) => setemailInp(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={passwordInp}
          onChange={(e) => setPasswordInp(e.target.value)}
        />
        <button type="submit" value="Submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
        {/* {!loggedIn && <p>Usuario no encontrado</p>} */}
      </form>
    </div>
  );
};
