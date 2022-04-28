import Redux from 'redux';

import exampleVideoData from '../data/exampleVideoData.js';

var videoListReducer = (state = exampleVideoData, action) => {
  //TODO: define a reducer for the videoList field of our state.
  if (action.type === 'CHANGE_LIST') {
    // state.videos = [...action.videos];
    return action.videos;
  }
  return state;
};

export default videoListReducer;
