import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ProffesorSubject from 'App/Models/ProffesorSubject'

export default class ProffesorSubjectsController {
  /**
   * Lista todos los ProffesorSubjects
   */
  public async index(ctx: HttpContextContract) {
    return ProffesorSubject.all()
  }

  /**
   * Almacena la información de un ProffesorSubject
   */
  public async store({ request }: HttpContextContract) {
    const body = request.body()

    body.proffesor_id = body.proffesor_id
    body.subject_id = body.subject_id

    const newProffesorSubject = await ProffesorSubject.create(body)
    return newProffesorSubject
  }

  /**
   * Muestra la información de un solo ProffesorSubject
   */
  public async show({ params }: HttpContextContract) {
    return ProffesorSubject.findOrFail(params.id)
  }

  /**
   * Actualiza la información de un ProffesorSubject basado
   * en los identificadores y nuevos parámetros
   */
  public async update({ params, request }: HttpContextContract) {
    const body = request.body()
    const theProffesorSubject = await ProffesorSubject.findOrFail(params.id)

    theProffesorSubject.proffesor_id = body.proffesor_id
    theProffesorSubject.subject_id = body.subject_id

    return theProffesorSubject.save()
  }

  /**
   * Elimina a un ProffesorSubject basado en los identificadores
   */
  public async destroy({ params }: HttpContextContract) {
    const theProffesorSubject = await ProffesorSubject.findOrFail(params.id)
    return theProffesorSubject.delete()
  }
}
