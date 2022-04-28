import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleSearchChange = (q) => {

  {type: 'SEARCH',
  q}
  //TODO:  Write an asynchronous action to handle a video search!

  return (q) => {
    return searchYouTube({YOUTUBE_API_KEY, q})
  }

};

export default handleSearchChange;
