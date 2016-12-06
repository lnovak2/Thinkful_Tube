var youtube_base_url = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback){
	var query = {
		part: 'snippet',
		key: 'AIzaSyD82nd7la4F5bRrYQfOyiDYrBdSay9HXV4',
		q: searchTerm,
		type: 'video',
		r: 'json'
	}
	$.getJSON(youtube_base_url, query, callback)
};

function displaySearchData(data){
	console.log(data);
	var resultElement = '';
  if (data.items) {
    data.items.forEach(function(item) {
     resultElement += 
     '<div class="tab">' +
		'<a href=https://www.youtube.com/watch?v=' + item.id.videoId + '><img src=' + item.snippet.thumbnails.medium.url + '></a>' +
		'<a class="text" href=https://www.youtube.com/channel/' + item.snippet.channelId + '>See more videos on this channel</a>' +
	 '</div>';
    });
  }
  else {
    resultElement += '<p>No results</p>';
  }
  $('#display').html(resultElement);
};

$('.searchForm').submit(function(event){
	event.preventDefault();
	var query = $(this).find('#textField').val();
	getDataFromApi(query, displaySearchData);
});
