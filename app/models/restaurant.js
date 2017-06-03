import DS from 'ember-data';

export default DS.Model.extend({
  name:DS.attr('string'),
  city:DS.attr('string'),
  cuisine:DS.attr('string'),
  neighborhood:DS.attr('string'),
  date_dined:DS.attr('date'),
  notes:DS.attr('string'),

});
