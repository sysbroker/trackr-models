'use strict';
module.exports = function(Checkin) {
  /**
   * Hooks
   */
  require('./checkin/hooks')(Checkin);
};
