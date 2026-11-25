'use strict';

/**
 * private-party service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::private-party.private-party');
