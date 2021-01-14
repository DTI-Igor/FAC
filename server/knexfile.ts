import path from "path";

module.exports = {
    development: {
        client: 'pg',
        connection: {
            database: "fac",
            user: "postgres",
            password: "root"
        },
        migrations: {
            tableName: 'knex_called',
            directory: `${__dirname}/src/database/migrationsV2`
        }
    }
};