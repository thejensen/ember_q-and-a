import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', {path: '/'});
  this.route('question', {path: '/question/:question_id'});
  this.route('bookmarks');
  this.route('about');
});

export default Router;
