import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post';

export default class PostsController {
    // SHARE = CREATE NEW POST 
    public async share(ctx: HttpContextContract) {
        const data = ctx.request.body();
        const res = await Post.create(data);
        return res
    }
}
