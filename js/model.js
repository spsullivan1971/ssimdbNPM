var MovieModel = Backbone.Model.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/SSimdbNPM',
  idAttribute: '_id',
  defaults: function () {
    return {
      Title: "MovieTitle",
      poster: "MoviePoster",
      plot: "PlotDescription",
      rating: "MovieRating",
    };
  },
  initialize: function (options) {
    // console.log('options name', options);
  }
});
