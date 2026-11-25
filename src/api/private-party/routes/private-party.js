'use strict';

/**
 * private-party router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::private-party.private-party');
