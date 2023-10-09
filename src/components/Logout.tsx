import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/data/userSlice";
import { User } from "../Types/userType";
import { useEffect, useState } from "react";
import { addData } from "../features/data/dataSlice";
import { Pagination } from "./Pagination";

const Logout = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [userPerPage, setUserPerPage] = useState<number>(3);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userList = () => {
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((json) => dispatch(addData(json)))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setUserPerPage(3);
    userList();
  }, []);

  const data = useSelector((state: any) => state.data);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div>
      <h1>Lista de usuarios</h1>
      <button onClick={handleLogout}>Logout</button>

      <div className="container-users">
        {data?.data.map((user: User) => (
          <div className="card-user" key={user.id}>
            <figure>
              <img src={user.avatar} />
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
        userPerPage={userPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalUsers={data.total}
      />

      {/* <button onClick={handleFetch}>Fetch Data</button> */}
      {/* {data && <div>{JSON.stringify(data)}</div>} */}
    </div>
  );
};

export default Logout;
