import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Like extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @column()
    public user_id: number
    @column()
    public post_id: number

    // ************REACTED? IS TO DETERMINE WHETHER TO INCREASE LIKES COUNT OR TO DECREASE************
    // TO DECIDE LIKE OR UNLIKE
    @column()
    public reacted: number

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime
}
