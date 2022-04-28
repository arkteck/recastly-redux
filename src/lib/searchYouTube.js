var searchYouTube = ({key, query, max = 5}, callback) => {

  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .done(({items}) => {
      if (callback) {
        callback(items);
      }
    })
    .fail(({responseJSON}) => {
      if (responseJSON) {

        responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
      } else {
        console.log('responseJSON is ' + responseJSON)
      }
    });

};

export default searchYouTube;