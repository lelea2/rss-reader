import { Types } from '../constants/feed-types';

const initialState = {
  items: null
};

export default function feedReducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_FEEDS:
      return {
        ...state,
        items: action.payload.items
      };
    default:
      return state;
  }
}