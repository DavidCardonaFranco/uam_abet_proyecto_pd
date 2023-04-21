
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Subject from 'App/Models/Subject'


export default class SubjectsController {
    /**
     * Lista todos los Subjects
     */
    public async index(ctx: HttpContextContract) {
        return Subject.all();
    }
    /**
     * Almacena la información de un Subject
     */
    public async store({request}:HttpContextContract){
        const body=request.body();
        //Si se tiene un nombre, sobreescribe la información
        body.code = body.code;
        body.name = body.name;
        body.description = body.description;
        body.credits = body.credits;
        const newSubject = await Subject.create(body);
        return newSubject;
    }
    /**
     * Muestra la información de un solo Subject
     */
    public async show({params}:HttpContextContract) {
        return Subject.findOrFail(params.code);
    }
    /**
     * Actualiza la información de un Subject basado
     * en el codeentificador y nuevos parámetros
     */
    public async update({params,request}:HttpContextContract) {
        const body=request.body();
        const theSubject = await Subject.findOrFail(params.code);
        theSubject.name=body.name;
        theSubject.description=body.description;
        theSubject.credits=body.credits;
        return theSubject.save();
    }
    /**
     * Elimina a un Subject basado en el codeentificador
     */
    public async destroy({params}:HttpContextContract) {
        const theSubject=await Subject.findOrFail(params.code);
        return theSubject.delete();
    }
}
