'use strict';

/**
 * builder-page controller — uses Strapi 5 default CRUD.
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::builder-page.builder-page');
