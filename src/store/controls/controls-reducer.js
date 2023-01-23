import { SET_SEARCH, SET_REGION, CLEAR_CONTROLS } from './controls-actions';

const INIT_STATE = {
  search: '',
  region: '',
};

export const controlsReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case SET_SEARCH:
      return {
        ...state,
        search: payload,
      };
    case SET_REGION:
      return {
        ...state,
        region: payload,
      };

    case CLEAR_CONTROLS:
      return INIT_STATE;
    default:
      return state;
  }
};
