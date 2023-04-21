// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Activity from 'App/Models/Activity';

export default class ActivitiesController {
  /**
   * Lista todas las actividades
   */
  public async index({}: HttpContextContract) {
    return Activity.all();
  }

  /**
   * Almacena la información de una actividad
   */
  public async store({ request }: HttpContextContract) {
    const body = request.body();
    body.name = body.name;
    body.description = body.description;
    body.start_date = body.start_date;
    body.end_date = body.end_date;
    body.subject_id = body.subject_id;
    const newActivity = await Activity.create(body);
    return newActivity;
  }

  /**
   * Muestra la información de una sola actividad
   */
  public async show({ params }: HttpContextContract) {
    return Activity.findOrFail(params.id);
  }

  /**
   * Actualiza la información de una actividad basada
   * en el identificador y nuevos parámetros
   */
  public async update({ params, request }: HttpContextContract) {
    const body = request.body();
    const theActivity = await Activity.findOrFail(params.id);
    theActivity.name = body.name;
    theActivity.description = body.description;
    theActivity.start_date = body.start_date;
    theActivity.end_date = body.end_date;
    theActivity.subject = body.subject_id;
    return theActivity.save();
  }

  /**
   * Elimina una actividad basada en el identificador
   */
  public async destroy({ params }: HttpContextContract) {
    const theActivity = await Activity.findOrFail(params.id);
    return theActivity.delete();
  }
}
