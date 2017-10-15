'use strict';

module.exports = function(Track) {
  Track.prototype.isStarted = function() {
    return this.status === 'started';
  };
  Track.prototype.starts = function() {
    if (this.isStarted())
      throw new Error('track has already started', 400);

    this.status = 'started';
    this.startedAt = Date.now();
  };

  /**
   * Remotes
   */
  require('./track/remotes')(Track);

  /**
   * Hooks
   */
  require('./track/hooks')(Track);
};
