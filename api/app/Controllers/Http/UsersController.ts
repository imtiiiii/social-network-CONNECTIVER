import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';

export default class UsersController {
    public async store(ctx: HttpContextContract) {
        const data = ctx.request.body();
        const user = await User.create(data)
        return [user, ctx.auth]
    }
    public async show(ctx: HttpContextContract) {
        const data = await User.query()
        return { hello: 2 }
    }
}
