import { Encryption } from '@adonisjs/core/build/standalone';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Evaluation from 'App/Models/Evaluation'


export default class EvaluationsController {
    /**
     * Lista todos los Evaluations
     */
    public async index(ctx: HttpContextContract) {
        return Evaluation.all();
    }
    /**
     * Almacena la información de un Evaluation
     */
    public async store({request}:HttpContextContract){
        const body=request.body();
        //Si se tiene un nombre, sobreescribe la información
        body.name = body.name;
        body.email = body.email;
        body.password = body.password;
        const newEvaluation = await Evaluation.create(body);
        return newEvaluation;
    }
    /**
     * Muestra la información de un solo Evaluation
     */
    public async show({params}:HttpContextContract) {
        return Evaluation.findOrFail(params.id);
    }
    /**
     * Actualiza la información de un Evaluation basado
     * en el identificador y nuevos parámetros
     */
    public async update({params,request}:HttpContextContract) {
        const body=request.body();
        const theEvaluation = await Evaluation.findOrFail(params.id);
        theEvaluation.name=body.name;
        theEvaluation.email=body.email;
        theEvaluation.passwords=body.passwords;
        return theEvaluation.save();
    }
    /**
     * Elimina a un Evaluation basado en el identificador
     */
    public async destroy({params}:HttpContextContract) {
        const theEvaluation=await Evaluation.findOrFail(params.id);
        return theEvaluation.delete();
    }
}
