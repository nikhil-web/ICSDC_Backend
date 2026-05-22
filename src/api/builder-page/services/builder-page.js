'use strict';

/**
 * builder-page service — uses Strapi 5 default CRUD service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::builder-page.builder-page');
