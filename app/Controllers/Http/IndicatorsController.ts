import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Indicator from 'App/Models/Indicator'

export default class IndicatorsController {
  /**
   * Lista todos los Indicators
   */
  public async index(ctx: HttpContextContract) {
    return Indicator.all()
  }

  /**
   * Almacena la información de un Indicator
   */
  public async store({ request }: HttpContextContract) {
    const body = request.body()

    body.name = body.name
    body.expected_value = body.expected_value
    body.real_value = body.real_value
    body.id_outcome = body.id_outcome

    const newIndicator = await Indicator.create(body)
    return newIndicator
  }

  /**
   * Muestra la información de un solo Indicator
   */
  public async show({ params }: HttpContextContract) {
    return Indicator.findOrFail(params.id)
  }

  /**
   * Actualiza la información de un Indicator basado
   * en el identificador y nuevos parámetros
   */
  public async update({ params, request }: HttpContextContract) {
    const body = request.body()
    const theIndicator = await Indicator.findOrFail(params.id)

    theIndicator.name = body.name
    theIndicator.expected_value = body.expected_value
    theIndicator.real_value = body.real_value
    theIndicator.id_outcome = body.id_outcome

    return theIndicator.save()
  }

  /**
   * Elimina a un Indicator basado en el identificador
   */
  public async destroy({ params }: HttpContextContract) {
    const theIndicator = await Indicator.findOrFail(params.id)
    return theIndicator.delete()
  }
}
