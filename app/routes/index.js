import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      { src: 'http://vjs.zencdn.net/v/oceans.mp4', type: 'video/mp4' },
      { src: 'http://vjs.zencdn.net/v/oceans.webm', type: 'video/webm' },
      { src: 'http://vjs.zencdn.net/v/oceans.ogv', type: 'video/ogg' },
    ];
  },
});
