import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import OutcomeSubject from 'App/Models/OutcomeSubject'

export default class OutcomeSubjectsController {
  /**
   * Lista todos los OutcomeSubjects
   */
  public async index(ctx: HttpContextContract) {
    return OutcomeSubject.all()
  }

  /**
   * Almacena la información de un OutcomeSubject
   */
  public async store({ request }: HttpContextContract) {
    const body = request.body()

    body.id_outcome = body.id_outcome
    body.subject_id = body.subject_id

    const newOutcomeSubject = await OutcomeSubject.create(body)
    return newOutcomeSubject
  }

  /**
   * Muestra la información de un solo OutcomeSubject
   */
  public async show({ params }: HttpContextContract) {
    return OutcomeSubject.findOrFail(params.id)
  }

  /**
   * Actualiza la información de un OutcomeSubject basado
   * en el identificador y nuevos parámetros
   */
  public async update({ params, request }: HttpContextContract) {
    const body = request.body()
    const theOutcomeSubject = await OutcomeSubject.findOrFail(params.id)

    theOutcomeSubject.id_outcome = body.id_outcome
    theOutcomeSubject.subject_id = body.subject_id

    return theOutcomeSubject.save()
  }

  /**
   * Elimina a un OutcomeSubject basado en el identificador
   */
  public async destroy({ params }: HttpContextContract) {
    const theOutcomeSubject = await OutcomeSubject.findOrFail(params.id)
    return theOutcomeSubject.delete()
  }
}
