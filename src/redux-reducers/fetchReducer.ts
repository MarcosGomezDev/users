import { Data } from '../Types/dataType';
import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  FetchActionTypes,
} from '../redux-actions/fetchActions';

interface State {
  data: Data | null; // TODO: Object o any
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  data: null,
  loading: false,
  error: null,
};

const fetchReducer = (state = initialState, action: FetchActionTypes): State => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchReducer;