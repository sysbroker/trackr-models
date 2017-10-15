'use strict';

const co = require('co');
/**
 * track service
 */
module.exports = function(Track) {
  return {
    /**
     * starts a specific track
     */
    start: co.wrap(function* (trackId) {
      const track = yield Track.findById(trackId);
      try {
        track.starts();
        return yield track.save();
      } catch (ex) {
        throw ex;
      }
    }),
  };
};
