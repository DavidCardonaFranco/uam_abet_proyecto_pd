import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Proffesor from 'App/Models/Proffesor'


export default class ProffesorsController {
    /**
     * Lista todos los Proffesors
     */
    public async index(ctx: HttpContextContract) {
        return Proffesor.all();
    }
    /**
     * Almacena la información de un Proffesor
     */
    public async store({request}:HttpContextContract){
        const body=request.body();
        //Si se tiene un nombre, sobreescribe la información
        body.name = body.name;
        body.email = body.email;
        body.password = body.password;
        const newProffesor = await Proffesor.create(body);
        return newProffesor;
    }
    /**
     * Muestra la información de un solo Proffesor
     */
    public async show({params}:HttpContextContract) {
        return Proffesor.findOrFail(params.id);
    }
    /**
     * Actualiza la información de un Proffesor basado
     * en el identificador y nuevos parámetros
     */
    public async update({params,request}:HttpContextContract) {
        const body=request.body();
        const theProffesor = await Proffesor.findOrFail(params.id);
        theProffesor.name=body.name;
        theProffesor.email=body.email;
        theProffesor.password=body.password;
        return theProffesor.save();
    }
    /**
     * Elimina a un Proffesor basado en el identificador
     */
    public async destroy({params}:HttpContextContract) {
        const theProffesor=await Proffesor.findOrFail(params.id);
        return theProffesor.delete();
    }
}
