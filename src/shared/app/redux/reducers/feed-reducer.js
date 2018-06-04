import { Types } from '../constants/feed-types';

const initialState = {
  items: null,
  title: null,
  description: null
};

export default function feedReducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_FEEDS:
      return {
        ...state,
        items: action.payload.items,
        title: action.payload.title,
        description: action.payload.description
      };
    default:
      return state;
  }
}