'use strict';
const co = require('co');
const geolib = require('geolib');

/**
 * checkin factory
 */
module.exports = function(Checkin, Point) {
  return {
    /**
     * create a checkin instance copying point `location`, `address` and `name` data
     */
    create: co.wrap(function* (checkin) {
      const point = yield Point.findOne({id: checkin.pointId});
      checkin.location = point.location;
      checkin.address = point.address;
      checkin.obs = point.name;
      return checkin;
    }),
  };
};
