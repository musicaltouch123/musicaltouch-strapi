'use strict';

/**
 * wedding-emcee service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wedding-emcee.wedding-emcee');
