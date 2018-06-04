import { Types } from '../constants/feed-types';
import Request from 'axios';

export function getFeed(id) {
  return async function (dispatch, getState) {
    dispatch({
      type: Types.GET_FEEDS,
      payload: {}
    });
    let { data } = await getFeeds(id);
    // console.log(data);
    dispatch({
      type: Types.GET_FEEDS,
      payload: data
    });
  }
}

function getFeeds(id) {
  return Request.get(`http://localhost:9000/api/feeds/${id}`);
}