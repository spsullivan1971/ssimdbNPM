var MovieModel = Backbone.Model.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/SSimdbNPM',
  idAttribute: '_id',
  defaults: function () {
    return {
      Title: "",
      MoviePoster: "",
      PlotDescription: "",
      MovingRating: "",
    };
  },
  initialize: function (options) {
    // console.log('options name', options);
  }
});
