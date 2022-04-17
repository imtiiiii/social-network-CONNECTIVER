import Application from '@ioc:Adonis/Core/Application'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler';
import Post from 'App/Models/Post';

export default class PostsController {
    // SHARE = CREATE NEW POST 
    public async share(ctx: HttpContextContract) {
        const data = ctx.request.body();
        const caption = data.caption;
        const photo = ctx.request.file("img")
        const imgName = new Date().getTime().toString() + `.${photo?.extname}`
        // console.log(photo)
        await photo?.move(Application.publicPath("/uploads"), { name: imgName })
    }


    public async posts(ctx: HttpExceptionHandler) {
        // console.log("get called");
        const post = await Post.query().orderBy("id", "asc").preload("user")

        return post

    }
}
