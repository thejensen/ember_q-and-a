import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    cancel() {
      this.set('addNewAnswer', false);
    },
    saveAnswer() {
      var params = {
        author: this.get('author'),
        answer: this.get('answer'),
        question: this.get('question'),
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
      this.set('author', '');
      this.set('answer', '');
    }
  }
});
