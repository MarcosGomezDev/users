import { useDispatch, useSelector } from "react-redux";
// import { fetchData } from "../redux-actions/fetchActions";
// import { FC } from "react";
import useFetchUsers from "../hooks/useFetchUsers";
import { User } from "../Types/userType";
import { useEffect } from "react";
// import { State } from '';

// interface UserListProps {
//   data?: User[];
//   // handleFetchClick?: () => void; // Descomenta si necesitas usar el evento click
// }

export const Listado = () => {
  const { fetchData } = useFetchUsers();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: any) => state);
  const url: string = "https://reqres.in/api/login";

  // const handleFetch = () => {
  //   fetchData("https://reqres.in/api/login");
  // };

  useEffect(() => {
    // dispatch(fetchData(url));
    fetchData(url);
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // fetchData("https://reqres.in/api/users");

  return (
    <div>
      <h1>Lista de usuarios</h1>
      {/* <ul>
        {data?.data.map((user: User) => (
          <li key={user.id}>
            <p>Name: {user.first_name}</p>
            <p>Last Name: {user.last_name}</p>
            <p>
              Avatar: <img src={user.avatar} />
            </p>
          </li>
        ))}
      </ul> */}
      {/* <button onClick={handleFetch}>Fetch Data</button> */}
      {/* {data && <div>{JSON.stringify(data.data)}</div>} */}
    </div>
  );
};
