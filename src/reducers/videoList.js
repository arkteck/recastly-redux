import Redux from 'redux';

import exampleVideoData from '../data/exampleVideoData.js';

var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  if (action.type === 'CHANGE_VIDEO_LIST') {
    state = [...action.videos];
    // return action.videos;
  }
  return state;
};

export default videoListReducer;
