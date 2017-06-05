import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete() {
      console.log('Delete button clicked. Inside components/restaurant-list')
      return this.sendAction('deleteRestaurant', this.get('restaurant'))
    }
  }
});
