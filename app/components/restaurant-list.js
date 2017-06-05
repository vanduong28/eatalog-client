import Ember from 'ember';

export default Ember.Component.extend({
  newRestaurant: {
    name: null,
    city: null,
    cuisine: null,
    neighborhood: null,
    date_dined: null,
    notes: null
  },
  actions: {
    delete() {
      console.log('Delete button clicked. Inside components/restaurant-list')
      return this.sendAction('deleteRestaurant', this.get('restaurant'))
    },
    create() {
      console.log('Create restaurant. Inside components/restaurant-list')
      let data = this.get('newRestaurant')
      data.restaurant = this.get('restaurant')
      console.log('new restaurant is: ', this.get('newRestaurant'))
      this.sendAction('createRestaurant', data)
      // after sending action, clear the input fields
      // this.set('newRestaurant.name', null)
      // this.set('newRestaurant.city', null)
      // this.set('newRestaurant.cuisine', null)


    }
  }
});
