'use strict';

/**
 * dj-profile service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dj-profile.dj-profile');
