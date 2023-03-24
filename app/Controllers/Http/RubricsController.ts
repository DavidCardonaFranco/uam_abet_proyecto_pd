import { Encryption } from '@adonisjs/core/build/standalone';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Rubric from 'App/Models/Rubric'


export default class RubricsController {

    /**
     * Lista todos los Rubrics
     */
    public async index(ctx:HttpContextContract){
        return Rubric.all();
    }
    /**
     * Almacena la información de un Rubric
     */
    public async store({request}:HttpContextContract){
        const body=request.body();
        //Si se tiene un nombre, sobreescribe la información
        body.name = body.name;
        body.description = body.description;
        const newRubric = await Rubric.create(body);
        return newRubric;
    }
    /**
     * Muestra la información de un solo Rubric
     */
    public async show({params}:HttpContextContract) {
        return Rubric.findOrFail(params.id);
    }
    /**
     * Actualiza la información de un Rubric basado
     * en el identificador y nuevos parámetros
     */
    public async update({params,request}:HttpContextContract) {
        const body=request.body();
        const theRubric = await Rubric.findOrFail(params.id);
        theRubric.name=body.name;
        theRubric.description=body.description;
        return theRubric.save();
    }
    /**
     * Elimina a un Rubric basado en el identificador
     */
    public async destroy({params}:HttpContextContract) {
        const theRubric=await Rubric.findOrFail(params.id);
        return theRubric.delete();
    }
}

