'use strict';

/**
 * custom-instrumental service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::custom-instrumental.custom-instrumental');
