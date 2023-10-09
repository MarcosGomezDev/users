import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, logout } from "../features/data/userSlice";

export const Login: FC = () => {
  const url: string = "https://reqres.in/api/login";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [emailInp, setemailInp] = useState<string>("");
  const [passwordInp, setPasswordInp] = useState<string>("");
  // const [loginStatus, setLoginStatus] = useState<string | null>(null);

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
      console.log(data);

      if (response.ok && data.token) {
        dispatch(
          login({
            token: data,
            loggedIn: true,
          })
        );
        console.log(`Success`);
      } else {
        dispatch(logout());
        console.log(`Error: "Unknown error logout`);
      }
    } catch (error) {
      dispatch(logout());
      console.log(`Error: ${(error as Error).message || "Unknown error"}`);
    }
  };

  const token: string = useSelector((state: any) => state.token);
  const loggedIn: boolean = useSelector((state: any) => state.loggedIn);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin();
    
    console.log(token);
    console.log(loggedIn);

    if (loggedIn) {
      navigate("/users");
    }
  };

  return (
    <div className="login">
      <h1 className="headers">Login Here</h1>
      <form className="contact" onSubmit={(e) => handleSubmit(e)}>
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
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
