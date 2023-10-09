// import { AppDispatch } from "../redux-store/store";
import { Dispatch } from "redux";

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

interface FetchStartAction {
  type: typeof FETCH_START;
}

interface FetchSuccessAction {
  type: typeof FETCH_SUCCESS;
  payload: any;
}

interface FetchFailureAction {
  type: typeof FETCH_FAILURE;
  payload: string;
}

export type FetchActionTypes = FetchStartAction | FetchSuccessAction | FetchFailureAction;

export const fetchData = (url: string) => async (dispatch: Dispatch) => {
  dispatch({ type: FETCH_START });
  try {
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: FETCH_SUCCESS, payload: data });
  } catch (error: unknown) {
    if (error instanceof Error) {
      dispatch({ type: FETCH_FAILURE, payload: error.toString() });
    } else {
      dispatch({ type: FETCH_FAILURE, payload: 'An unknown error occurred' });
    }
  }
};