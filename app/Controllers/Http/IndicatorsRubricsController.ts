import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import IndicatorsRubric from 'App/Models/IndicatorRubric'

export default class IndicatorsRubricsController {
  /**
   * Lista todos los IndicatorsRubrics
   */
  public async index(ctx: HttpContextContract) {
    return IndicatorsRubric.all()
  }

  /**
   * Almacena la información de un IndicatorsRubric
   */
  public async store({ request }: HttpContextContract) {
    const body = request.body()

    body.id_rubric = body.id_rubric
    body.id_indicator = body.id_indicator

    const newIndicatorsRubric = await IndicatorsRubric.create(body)
    return newIndicatorsRubric
  }

  /**
   * Muestra la información de un solo IndicatorsRubric
   */
  public async show({ params }: HttpContextContract) {
    return IndicatorsRubric.findOrFail(params.id)
  }

  /**
   * Actualiza la información de un IndicatorsRubric basado
   * en el identificador y nuevos parámetros
   */
  public async update({ params, request }: HttpContextContract) {
    const body = request.body()
    const theIndicatorsRubric = await IndicatorsRubric.findOrFail(params.id)

    theIndicatorsRubric.id_rubric = body.id_rubric
    theIndicatorsRubric.id_indicator = body.id_indicator

    return theIndicatorsRubric.save()
  }

  /**
   * Elimina a un IndicatorsRubric basado en el identificador
   */
  public async destroy({ params }: HttpContextContract) {
    const theIndicatorsRubric = await IndicatorsRubric.findOrFail(params.id)
    return theIndicatorsRubric.delete()
  }
}
