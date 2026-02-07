import { Controller, Get, Param, Post, Req, Res } from "@nestjs/common";
import type { Response } from "express";
import { UserService } from "./user.service";
import { User } from "src/decorators/user.decorator";
import type { AuthUser } from "src/auth/interface/authUser";

interface AuthenticatedRequest extends Request {
  user: { userId: number };
}

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("profile")
  async getUser(@User() user: AuthUser) {
    return this.userService.getUserInfo(user.id);
  }

  @Post("logout")
  async logout(@Res() res: Response) {
    res.clearCookie("accessToken");
    return res.status(200).send({ message: "로그아웃 성공" });
  }
}
