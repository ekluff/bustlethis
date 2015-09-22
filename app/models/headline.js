import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  tag: DS.attr(),
  image: DS.attr(),
  headline: DS.attr(),
});
