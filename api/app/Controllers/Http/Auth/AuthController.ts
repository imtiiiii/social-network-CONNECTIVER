import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';
import AuthService from './AuthService';
import AuthValidator from './AuthValidator';


export default class AuthController {
  private authService: AuthService
  private authValidator: AuthValidator

  constructor() {
    this.authService = new AuthService()
    this.authValidator = new AuthValidator()
  }

  async register(ctx: HttpContextContract) {
    // const data = await this.authValidator.validateSignupSchema(ctx)
    // return this.authService.register(ctx);
    const data = ctx.request.body();
    const user = await User.create(data);
    return ctx.auth.use("web").login(user)

  }

  async login(ctx: HttpContextContract) {
    // await this.authValidator.validateLoginSchema(ctx)
    let data = ctx.request.all();

    return ctx.auth.use('web').attempt(data.email, data.password)
  }

  async getUser(ctx: HttpContextContract) {
    try {
      return ctx.auth.use('web').authenticate();
    } catch (error) {
      console.log("not found")
    }
  }

  async logout({ auth }) {
    return auth.logout()
  }

  async verifyEmail(ctx: HttpContextContract) {
    try {
      let validateData = await this.authValidator.validateVerificationData(ctx)
      let data = ctx.request.all()
      data.verificationCode = validateData.verificationCode
      data.email = validateData.email
      return this.authService.verifyEmail(ctx)
    } catch (error) {
      return ctx.response.status(422).send(error.messages)
    }

  }
  async sendResetToken(ctx: HttpContextContract) {
    try {
      let validatedData = await this.authValidator.validateResetSchema(ctx)
      return this.authService.sendResetToken(ctx, validatedData)
    } catch (error) {
      return ctx.response.status(422).send(error.messages)
    }
  }


  async verifyCode(ctx: HttpContextContract) {
    try {
      let validatedData = await this.authValidator.validateTokenData(ctx)

      return this.authService.verifyCode(ctx, validatedData)
    } catch (error) {
      return ctx.response.status(422).send(error.messages)
    }

  }

  async passwordReset(ctx: HttpContextContract) {
    try {
      let validatedData = await this.authValidator.validateNewPasswordData(ctx)
      return this.authService.passwordReset(ctx, validatedData)
    } catch (error) {
      return ctx.response.status(422).send(error.messages)
    }

  }




}
