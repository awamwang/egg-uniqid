'use strict';

module.exports = app => {
  app.logger.warn(`[${app.config.uniqid.appName}] plugins start with config ${JSON.stringify(app.config.uniqid)}`);
};
