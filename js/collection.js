var PostCollection = Backbone.Collection.extend({
  model: movieModel,
  url: 'http://tiy-fee-rest.herokuapp.com/collections/SSimdbNPM'
});
