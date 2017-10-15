'use strict';
const CheckinFactory = require('./checkin.factory');
module.exports = (Checkin) => {
  Checkin.observe('before save', (ctx, next) => {
    const {instance} = ctx;
    const {Point} = Checkin.app.models;
    const factory = new CheckinFactory(Checkin, Point);
    factory
      .create(ctx.instance)
      .then((checkin) => {
        ctx.instance = checkin;
        next();
      });
  });
};
