import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Leader from 'App/Models/Leader'


export default class LeadersController {
    /**
     * Lista todos los Leaders
     */
    public async index(ctx: HttpContextContract) {
        return Leader.all();
    }
    /**
     * Almacena la información de un Leader
     */
    public async store({request}:HttpContextContract){
        const body=request.body();
        //Si se tiene un nombre, sobreescribe la información
        body.name = body.name;
        body.email = body.email;
        body.password = body.password;
        const newLeader = await Leader.create(body);
        return newLeader;
    }
    /**
     * Muestra la información de un solo Leader
     */
    public async show({params}:HttpContextContract) {
        return Leader.findOrFail(params.id);
    }
    /**
     * Actualiza la información de un Leader basado
     * en el identificador y nuevos parámetros
     */
    public async update({params,request}:HttpContextContract) {
        const body=request.body();
        const theLeader = await Leader.findOrFail(params.id);
        theLeader.name=body.name;
        theLeader.email=body.email;
        theLeader.password=body.password;
        return theLeader.save();
    }
    /**
     * Elimina a un Leader basado en el identificador
     */
    public async destroy({params}:HttpContextContract) {
        const theLeader=await Leader.findOrFail(params.id);
        return theLeader.delete();
    }
}
