import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Subject extends BaseModel {
  @column({ isPrimary: true })
  public code: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public credits: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
