// views!!
var MovieView = Backbone.View.extend({
  template: _.template($('#postTmpl').html()),
  tagName: 'article',
  events: {
    'click .add': 'alertMe'
    //'click .edit': 'openEditDialogBox'
    //'submit .editSubmit': 'saveUpdatedMove'
  },
  alertMe: function (event) {
    event.preventDefault();
    alert("hi from alert");
  },
  initialize: function (options) {
    // console.log('view created');
    // console.log('in initialize', this.el);
  },
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    // console.log('in render', this.el);
    return this;
  }//,
  //openEditDialogBox: function() {
      //this.render()
  //},
  //saveUpdatedMove: function() {
    //1. this.model.set({
      //Title: $(grab from the dom).val();
  //})
  //this.model.save();
  //}
});
var MovieCollectionView = Backbone.View.extend({
  el: '#container',
  collection: null,
  events: {

  },
  initialize: function (options) {
    this.addAll();
  },
  changeColor: function (event) {
    console.log('hi, this is a cool article');
  },
  addAll: function () {
    _.each(this.collection.models, this.addOne, this);
  },
  addOne: function (post, idx, arr) {
    var movieView = new MovieView({model: post});
    this.$el.append(movieView.render().el);
  }

});
