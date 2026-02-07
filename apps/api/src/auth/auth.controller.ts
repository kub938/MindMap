import { Controller, Get, Req, Res, UseGuards } from "@nestjs/common";
import express from "express";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { Public } from "../decorators/public.decorator";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Get("google")
  @UseGuards(AuthGuard("google"))
  async googleAuth(@Req() req: express.Request) {}

  @Public()
  @Get("google/callback")
  @UseGuards(AuthGuard("google"))
  async googleAuthRedirect(
    @Req() req: express.Request,
    @Res() res: express.Response,
  ) {
    const { accessToken } = await this.authService.login(req.user);

    res.cookie("access_token", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // HTTPS에서만 전송
      sameSite: "lax", // CSRF 방어
      maxAge: 36000000,
    });

    res.redirect(`${process.env.CLIENT_URL}`);
  }
}
