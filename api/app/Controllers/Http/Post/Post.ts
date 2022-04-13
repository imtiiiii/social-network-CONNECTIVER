import Route from '@ioc:Adonis/Core/Route'
import PostsController from './PostsController'

Route.group(() => {
    Route.post("/share", "Post/PostsController.share")
    Route.get("/all", "Post/PostsController.posts")

}).prefix("posts")