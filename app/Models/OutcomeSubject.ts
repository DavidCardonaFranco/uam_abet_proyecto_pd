import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class OutcomeSubject extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public id_outcome: number

  @column()
  public id_subject: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}