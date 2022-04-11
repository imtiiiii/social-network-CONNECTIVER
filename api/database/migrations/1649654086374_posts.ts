import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Posts extends BaseSchema {
  protected tableName = 'posts'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer("user_id").unsigned().references("id").inTable("users").onDelete("CASCADE").onUpdate("CASCADE")
      table.string("text").notNullable()
      // ***********PRIVACY CAN BE PUBLIC OR FRIENDS*******************************
      // ********** 1=PUBLIC 0=FRIENDS *****************
      table.integer("privacy").notNullable().defaultTo(1);
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
