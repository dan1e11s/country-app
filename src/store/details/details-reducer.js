import {
  SET_COUNTRY,
  SET_LOADING,
  SET_ERROR,
  CLEAR_DETAILS,
  SET_NEIGHBORS,
} from './details-actions';

const INIT_STATE = {
  status: 'idle',
  error: null,
  oneCountry: null,
  neighbors: [],
};

export const detailsReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case SET_COUNTRY:
      return {
        ...state,
        status: 'received',
        oneCountry: payload,
      };
    case SET_LOADING:
      return {
        ...state,
        status: 'loading',
        error: null,
      };
    case SET_ERROR:
      return {
        ...state,
        status: 'rejected',
        error: payload,
      };

    case CLEAR_DETAILS:
      return INIT_STATE;
    case SET_NEIGHBORS:
      return {
        ...state,
        neighbors: payload,
      };
    default:
      return state;
  }
};
