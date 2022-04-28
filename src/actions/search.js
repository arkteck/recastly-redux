import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

var debounceTimer;
var handleSearchChange = (q) => {

  // {type: 'SEARCH',
  // q}
  //TODO:  Write an asynchronous action to handle a video search!

  // return _.debounce((dispatch) => {
  //   var options = {
  //     key: YOUTUBE_API_KEY,
  //     query: q
  //   };
  //   searchYouTube(options, (videos) => {
  //     dispatch(changeVideo(videos[0]));
  //     dispatch(changeVideoList(videos));
  //   });
  // }, 200);



  return (dispatch, getState) => {
      clearTimeout(debounceTimer);
       debounceTimer = setTimeout(() => {searchYouTube({key: YOUTUBE_API_KEY, query: q}, (videos) => {
        dispatch(changeVideoList(videos));
        dispatch(changeVideo(videos[0]));
      });}, 500);
  }

};

export default handleSearchChange;

/*
var handleSearchChange = (q) => {

  // {type: 'SEARCH',
  // q}
  //TODO:  Write an asynchronous action to handle a video search!

  var debounceFunction = function(dispatch) {
    return _.debounce(() => {
      searchYouTube({key: YOUTUBE_API_KEY, query: q}, (videos) => {
        dispatch(changeVideoList(videos));
        dispatch(changeVideo(videos[0]));
      });
    }, 500);
  };

  return (dispatch, getState) => {

    debounceFunction(dispatch)();

  }

};

*/