import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler';
import Post from 'App/Models/Post';

export default class PostsController {
    // SHARE = CREATE NEW POST 
    public async share(ctx: HttpContextContract) {
        const data = ctx.request.body();
        const caption = data.caption;
        const photo = data.photo
        // const res = await Post.create(data);
        console.log(caption);
        console.log(photo)
        // console.log(data)
        // return res
    }
    public async posts(ctx: HttpExceptionHandler) {
        // console.log("get called");
        const post = await Post.query().orderBy("id", "asc").preload("user")

        return post

    }
}
