'use strict';

/**
 * worship-band service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::worship-band.worship-band');
