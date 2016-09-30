angular.module('itunes')
.service('itunesService', function($http, $q){
  this.getSongData = function(artist){
    var defer = $q.defer();
    $http({
      method: 'JSONP',
      url: 'https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
    })

    .then(function(response){
      var dataArrs=[];
      for (var i = 0; i < response.data.results.length; i++) {
        dataArrs.push({
          AlbumArt: response.data.results[i].artworkUrl100,
          Artist: response.data.results[i].artistName,
          Collection: response.data.results[i].collectionCensoredName,
          CollectionPrice: response.data.results[i].collectionPrice,
          Play: response.data.results[i].previewUrl,
          Type: response.data.results[i].kind
        })
        }
        console.log(dataArrs);
        
        defer.resolve(dataArrs)

      })
      return defer.promise;
    }
});
// .then(function(response){
//   return response.data.results;
// }
  //This service is what will do the 'heavy lifting' and get our data from the iTunes API.
  //Also note that we're using a 'service' and not a 'factory' so all your methods you want to call in your controller need to be on 'this'.

  //Write a method that accepts an artist's name as the parameter, then makes a 'JSONP' http request to a url that looks like this




  //https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
  //Note that in the above line, artist is the parameter being passed in.
  //You can return the http request or you can make your own promise in order to manipulate the data before you resolve it.

    //Code here



    // this.getSongData = function() {
    //   var deferred = $q.defer();
    //   $http({
    //       method: 'GET',
    //       url: 'https://itunes.apple.com/search?term=' + artist
    //   }).then(function(response){
    //     var parsedResponse = response.data.data;
    //     for (var i = 0; i < parsedResponse.length; i++) {
    //       parsedResponse[i].first_name = 'Ralf';
    //     }
    //     deferred.resolve(parsedResponse);
    //   })
    //   return deferred.promise;
    // }
