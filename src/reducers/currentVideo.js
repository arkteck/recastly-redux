import Redux from 'redux';

var currentVideoReducer = (state= null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  if (action.type === 'CHANGE_VIDEO' && action.video) {
     return action.video;
     // state.currentVideo = action.video;
  }
  return state;
};

export default currentVideoReducer;
