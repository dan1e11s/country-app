import { SET_COUNTRIES, SET_LOADING, SET_ERROR } from './country-actions';

const INIT_STATE = {
  status: 'idle',
  error: null,
  countryList: [],
};

export const countryReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case SET_COUNTRIES:
      return {
        ...state,
        status: 'received',
        countryList: payload,
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
    default:
      return state;
  }
};
