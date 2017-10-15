'use strict';

module.exports = function(Agent) {

	/**
   * Hooks
   */
	require('./agent/hooks')(Checkin);
};
