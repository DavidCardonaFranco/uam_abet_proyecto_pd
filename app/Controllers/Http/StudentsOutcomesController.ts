import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import StudentsOutcome from 'App/Models/StudentOutcome'

export default class StudentsOutcomesController {
  /**
   * Lista todos los StudentsOutcomes
   */
  public async index(ctx: HttpContextContract) {
    return StudentsOutcome.all()
  }

  /**
   * Almacena la información de un StudentsOutcome
   */
  public async store({ request }: HttpContextContract) {
    const body = request.body()

    body.name = body.name
    body.description = body.description
    body.grade = body.grade
    body.id_leader = body.id_leader

    const newStudentsOutcome = await StudentsOutcome.create(body)
    return newStudentsOutcome
  }

  /**
   * Muestra la información de un solo StudentsOutcome
   */
  public async show({ params }: HttpContextContract) {
    return StudentsOutcome.findOrFail(params.id)
  }

  /**
   * Actualiza la información de un StudentsOutcome basado
   * en el identificador y nuevos parámetros
   */
  public async update({ params, request }: HttpContextContract) {
    const body = request.body()
    const theStudentsOutcome = await StudentsOutcome.findOrFail(params.id)

    theStudentsOutcome.name = body.name
    theStudentsOutcome.description = body.description
    theStudentsOutcome.grade = body.grade
    theStudentsOutcome.id_leader = body.id_leader

    return theStudentsOutcome.save()
  }

  /**
   * Elimina a un StudentsOutcome basado en el identificador
   */
  public async destroy({ params }: HttpContextContract) {
    const theStudentsOutcome = await StudentsOutcome.findOrFail(params.id)
    return theStudentsOutcome.delete()
  }
}
