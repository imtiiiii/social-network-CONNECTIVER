import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Likes extends BaseSchema {
    protected tableName = 'likes'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id')
            table.integer("user_id").unsigned().references("id").inTable("users")
                .onDelete("CASCADE").onUpdate("CASCADE")
            table.integer("post_id").unsigned().references("id").inTable("posts")
                .onDelete("CASCADE").onUpdate("CASCADE")
            table.integer("reacted")
            table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
            table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
