import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Login } from "../components/Login";
import { Error404 } from "../components/errors/Err404";
import { Index } from "../components/Index";
import Logout from "../components/Logout";
import { useSelector } from "react-redux";

export const Router = () => {
  const data: boolean = useSelector((state: any) => state.loggedIn);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={data ? <Logout /> : <Login />} />
        {/* <Route path="/users" element={<Logout />} /> */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};
