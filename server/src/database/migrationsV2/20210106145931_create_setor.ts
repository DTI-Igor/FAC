import Knex from "knex";

export async function up(Knex: Knex) {
    return Knex.schema.createTable('setor', table => {
        table.increments('id').primary();
        table.string('descriptions').notNullable();
    });
}

export  async function down(Knex: Knex) {
    return Knex.schema.dropTable('setor');
}