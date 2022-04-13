import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {
    // SHARE = CREATE NEW POST 
    public async share(ctx: HttpContextContract) {
        const data = ctx.request.body();
        console.log("post running= ", data)
    }
}
