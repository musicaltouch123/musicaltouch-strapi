'use strict';

/**
 * private-party controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::private-party.private-party');
