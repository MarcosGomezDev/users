import { useEffect, useState } from "react";
// import { Data } from "../Types/dataType";

export const useFetch = async (url: string) => {
  const [dataFetch, setDataFetch] = useState();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setDataFetch(json));
  }, [url]);

  return { dataFetch };

  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");
  // const [loginStatus, setLoginStatus] = useState<string | null>(null);

  // const handleLogin = async () => {
  //   try {
  //     const response = await fetch("https://reqres.in/api/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email,
  //         password,
  //       }),
  //     });
  //     const data = await response.json();
  //     if (response.ok && data.token) {
  //       setDataFetch(data);
  //       setLoginStatus("Login successful!");
  //       return dataFetch;
  //     } else {
  //       setLoginStatus(`Login failed: ${data.error}`);
  //     }
  //   } catch (error) {
  //     setLoginStatus(`Error: ${(error as Error).message || "Unknown error"}`);
  //   }
  // };
};
