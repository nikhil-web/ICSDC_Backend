'use strict';

/**
 * Migration: builder_page_versions table.
 *
 * Stores snapshots of builder-page content for version history + rollback.
 * Triggered by Save Draft and Publish actions in the page builder.
 *
 * Each row is an immutable snapshot keyed by (page_document_id, version_number).
 * Versions are kept indefinitely; a cleanup job can prune > 90 days later.
 */

const TABLE = 'builder_page_versions';

async function up(knex) {
    const exists = await knex.schema.hasTable(TABLE);
    if (exists) return;

    await knex.schema.createTable(TABLE, (table) => {
        table.increments('id').primary();
        table.string('page_document_id', 255).notNullable();
        table.integer('version_number').notNullable();
        table.jsonb('sections_snapshot').notNullable();
        table.string('title_snapshot', 255).notNullable();
        table.text('change_summary');
        table.timestamp('created_at', { useTz: true }).notNullable().defaultTo(knex.fn.now());
        table.integer('created_by_id');

        table.unique(['page_document_id', 'version_number'], 'uq_page_version');
        table.index('page_document_id', 'idx_bpv_document_id');
        table.index(['page_document_id', 'version_number'], 'idx_bpv_doc_version');
    });
}

async function down(knex) {
    await knex.schema.dropTableIfExists(TABLE);
}

module.exports = { up, down };
