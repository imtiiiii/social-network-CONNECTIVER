import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
	@column({ isPrimary: true })
	public id: number

	@column()
	public email: string
	@column()
	public psd: string
	@column()
	public first_name: string
	@column()
	public last_name: string
	@column()
	public username: string

	@column.dateTime({ autoCreate: true })
	public createdAt: DateTime

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime
}