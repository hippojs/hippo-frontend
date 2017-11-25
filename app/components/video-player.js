import Component from '@ember/component';
import videojs from 'videojs';

export default Component.extend({
  didInsertElement() {
    videojs(this.$('video').get(0));
  },
});
