import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("vote", (table) => {
    table.string("id").notNullable().primary();
    table.string("project_id").notNullable();
    table.string("user_id").notNullable();
    table.timestamps();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("vote");
}
