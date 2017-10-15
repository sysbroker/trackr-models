'use strict';

module.exports = function(Track) {
  Track.afterRemote('start', afterRemoteStart);
  function afterRemoteStart(ctx, model, next) {
    Track.findOne({
      where: {
        id: model.track.id,
      },
      include: [
        {
          route: ['points'],
        },
        'checkins',
      ],
    }, onFind);

    function onFind(err, track) {
      next();
    };
  }
};
