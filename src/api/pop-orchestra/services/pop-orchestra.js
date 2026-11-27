'use strict';

/**
 * pop-orchestra service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pop-orchestra.pop-orchestra');
