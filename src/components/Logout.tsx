import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/data/userSlice";
import { User } from "../Types/userType";
import { useEffect, useState } from "react";
import { addData } from "../features/data/dataSlice";
import { Pagination } from "./Pagination";
import { Data } from "../Types/dataType";
import { LoginUser } from "../Types/loginType";

const Logout = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data: Data = useSelector((state: any) => state.data);
  // const loggedIn: boolean = useSelector((state: any) => state.loggedIn);
  const token = useSelector((state: any) => state.userLog.token);
  const loggedIn = useSelector((state: any) => state.userLog.loggedIn);

  const userList = (pag: number) => {
    const url: string = `https://reqres.in/api/users?page=${pag}`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        dispatch(addData(json));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  useEffect(() => {
    console.log(token);
    console.log(loggedIn);
  }, []);

  useEffect(() => {
    userList(currentPage);
  }, [currentPage]);

  return (
    <div>
      <h1>Lista de usuarios</h1>
      <button onClick={handleLogout}>Logout</button>
      <div className="container-users">
        {data?.data?.map((user: User) => (
          <div className="card-user" key={user.id}>
            <figure>
              <img src={user.avatar} alt={user.first_name} />
            </figure>
            <div>
              <p>{user.email}</p>
              <p>{user.first_name}</p>
              <p>{user.last_name}</p>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        userPerPage={6}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalUsers={data?.total || 0}
      />
    </div>
  );
};

export default Logout;
