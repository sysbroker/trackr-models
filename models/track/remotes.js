'use strict';

const TrackService = require('./service');

/**
 * loopback remotes from Track model
 */
module.exports = (Model) => {
  Model.start = (trackId, cb) => {
    const {Point, Track} = Model.app.models;
    const trackService = new TrackService(Track);
    trackService
      .start(trackId)
      .then((track) => {
        cb(null, track);
      })
      .catch((err) => {
        cb(err);
      });
  };

  Model.remoteMethod('start', {
    accepts: [
      {arg: 'trackId', type: 'string', http: {source: 'path'}},
    ],
    returns: {
      arg: 'track', type: 'object',
    },
    http: {
      path: '/:trackId/start',
      verb: 'put',
    },
  });
};
