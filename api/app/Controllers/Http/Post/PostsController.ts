import Application from '@ioc:Adonis/Core/Application'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler';
import Post from 'App/Models/Post';

export default class PostsController {
    // SHARE = CREATE NEW POST 
    public async share(ctx: HttpContextContract) {
        const photos = ctx.request.files("img");
        const data = ctx.request.all();
        // console.log("photo=", photo)
        const user_id = data.user_id
        const caption = data.caption
        console.log("user_id=", user_id)
        console.log("caption=", caption)

        let names = {}
        let i = 1;
        for (let img of photos) {
            const imgName = new Date().getTime().toString() + `.${img?.extname}`;
            names[`${i}`] = imgName;
            i++;

            // console.log("all photos", img)
            await img?.move(Application.publicPath("/uploads"), { name: imgName })
        }

        // console.log("names= ", names[1])
        const img = JSON.stringify(names)
        console.log("img=", img)
        const post = {
            user_id: user_id,
            img: img,
            caption: caption
        }
        const save = await Post.create(post)
        // return save
    }


    public async posts(ctx: HttpExceptionHandler) {
        // console.log("get called");
        const post = await Post.query().orderBy("id", "asc").preload("user")

        return post

    }
}
