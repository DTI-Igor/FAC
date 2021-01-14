import Knex from "knex";

export async function up(Knex: Knex) {
    return Knex.schema.createTable('called', table => {
        table.increments().primary();
        table.text('title').notNullable();
        table.text('descriptions').notNullable();
        table.date('created_at').notNullable();
        table.text('reasonmanifest');
        table.string('usuario');
        table.integer('evaluation');
        table.string('produto');
        table.date('datacomprada');
        table.string('localcompra');
        table.string('loteproduto');
        table.string('nomecliente');
        table.integer('id_categories').references('id').inTable('categories').onUpdate('CASCADE').onDelete('CASCADE');
        table.integer('id_manifest').references('id').inTable('manifest').onUpdate('CASCADE').onDelete('CASCADE');
        table.integer('id_setor').references('id').inTable('setor').onUpdate('CASCADE').onDelete('CASCADE');
    });
}

export  async function down(Knex: Knex) {
    return Knex.schema.dropTable('categories');
}