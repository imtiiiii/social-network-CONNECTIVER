import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Posts extends BaseSchema {
    protected tableName = 'posts'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.integer("user_id").unsigned().notNullable().references("id").inTable("users").onDelete("CASCADE").onUpdate("CASCADE").notNullable();
            // **************PRIVACY=1 MEANS PUBLIC PRIVACY=0 MEANS PRIVATE/FRIENDS ONLY
            table.integer("privacy").defaultTo(1);
            table.string("caption").defaultTo("test");
            // table.string("img").defaultTo(null);
            table.json("img").defaultTo("null")
            table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
            table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
