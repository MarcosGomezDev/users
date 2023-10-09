import { useDispatch } from "react-redux";
import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  FetchActionTypes,
} from "../redux-actions/fetchActions";

// import { useEffect, useState } from "react";
import { Data } from "../Types/dataType";

const useFetchUsers = () => {
  // const [data, setData] = useState<Data | null>(null);
  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // }, [url]);
  // return { data };
  // const dispatch = useDispatch();
  // const fetchData = (url: string) => {
  //   dispatch<FetchActionTypes>({ type: FETCH_START });
  //   fetch(url)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then((data: Data) => {
  //       dispatch<FetchActionTypes>({ type: FETCH_SUCCESS, payload: data });
  //     })
  //     .catch((error: unknown) => {
  //       if (error instanceof Error) {
  //         dispatch({ type: FETCH_FAILURE, payload: error.toString() });
  //       } else {
  //         dispatch({
  //           type: FETCH_FAILURE,
  //           payload: "An unknown error occurred",
  //         });
  //       }
  //     });
  // };
  // return { fetchData };


  const dispatch = useDispatch();
  const fetchData = async (url: string) => {
    dispatch<FetchActionTypes>({ type: FETCH_START });
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: Data = await response.json();
      dispatch<FetchActionTypes>({ type: FETCH_SUCCESS, payload: data });
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch({ type: FETCH_FAILURE, payload: error.message });
      } else {
        dispatch({
          type: FETCH_FAILURE,
          payload: "An unknown error occurred",
        });
      }
    }
  };
  return { fetchData };
};

export default useFetchUsers;
