import Knex from "knex";

export async function up(Knex: Knex) {
    return Knex.schema.createTable('called', table => {
        table.increments('id').primary();
        table.text('title').notNullable();
        table.text('descriptions').notNullable();
        table.timestamp('created_at').defaultTo(Knex.fn.now());
        table.integer('evaluation');
        table.integer('id_categories').references('id').inTable('categories').onUpdate('CASCADE').onDelete('CASCADE');
    });
}

export  async function down(Knex: Knex) {
    return Knex.schema.dropTable('categories');
}