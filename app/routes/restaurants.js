import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('restaurant')
  },
  actions: {
    deleteRestaurant(restaurant) {
      console.log('inside delete route')
      restaurant.destroyRecord()
    },
    createRestaurant(data) {
      console.log('inside create route')
      let restaurantRecord = this.get('store').createRecord('restaurant', data)
      restaurantRecord.save()
        // .then(() => {
        //   this.set('newRestaurant.name', null)
        // }
    }
  }
});
