import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    // this.store
    //   .createRecord('video', {
    //     title: 'bar',
    //     description: 'foo',
    //     source: 'http://vjs.zencdn.net/v/oceans.mp4',
    //   })
    //   .save()
    //   .then(() => {
    //     console.log('save success!');
    //   });

    return this.store.findAll('video');
  },

  actions: {
    // TODO: after user component finished, remove this from route action
    signOut() {
      this.get('session').close();
    },
  },
});
