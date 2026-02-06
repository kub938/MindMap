import { Controller, Get, Param, Post, Req, Res } from "@nestjs/common";
import type { Response } from "express";
import { UserService } from "./user.service";

interface AuthenticatedRequest extends Request {
  user: { userId: number };
}

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("profile")
  async getUser(@Req() req: AuthenticatedRequest) {
    return this.userService.getUserInfo(req.user.userId);
  }

  @Post("logout")
  async logout(@Res() res: Response) {
    res.clearCookie("accessToken");
    return res.status(200).send({ message: "로그아웃 성공" });
  }
}
