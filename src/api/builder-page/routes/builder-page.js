'use strict';

/**
 * builder-page router — default Strapi routes (find, findOne, create, update, delete).
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::builder-page.builder-page');
