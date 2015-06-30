var movieModel = Backbone.Model.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/SSimdbNPM',
  idAttribute: '_id',
  defaults: function () {
    return {
      Title: "movieTitle",
      poster: "moviePoster",
      plot: "plotDescription",
      rating: "movieRating",
    };
  },
  initialize: function (options) {
    // console.log('options name', options);
  }
});
