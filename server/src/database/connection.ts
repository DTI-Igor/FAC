import path from "path";
import Knex from "knex";

const db = Knex({
  client: "pg",
  connection: {
    database: "fac",
    user: "postgres",
    password: "root",
  },
  useNullAsDefault: true,
});

export default db;
