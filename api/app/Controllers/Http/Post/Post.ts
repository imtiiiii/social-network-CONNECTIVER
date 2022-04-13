import Route from '@ioc:Adonis/Core/Route'
import PostsController from './PostsController'

Route.group(() => {
    Route.post("/", "PostsController.share")
    Route.get("/", "PostsController.share")

}).prefix("posts").middleware("auth")