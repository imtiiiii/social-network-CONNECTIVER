import Application from '@ioc:Adonis/Core/Application'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler';
import Post from 'App/Models/Post';

export default class PostsController {
    // SHARE = CREATE NEW POST 
    public async share(ctx: HttpContextContract) {
        const photo = ctx.request.files("img");
        // const data = ctx.request.all();
        console.log("photo=", photo)
        // const user_id = data.user_id
        // const caption = data.caption
        // const imgName = new Date().getTime().toString() + `.${photo?.extname}`

        // // await photo?.move(Application.publicPath("/uploads"), { name: imgName })
        // const post = {
        //     user_id: user_id,
        //     img: imgName,
        //     caption: caption
        // }
        // const save = await Post.create(post)
        // return save
    }


    public async posts(ctx: HttpExceptionHandler) {
        // console.log("get called");
        const post = await Post.query().orderBy("id", "asc").preload("user")

        return post

    }
}
