import { Injectable, NotFoundException } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { UserInfoDto } from "./user.dto";

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepository) {}

  async getUserInfo(id: number): Promise<UserInfoDto> {
    const user = await this.userRepo.getUserInfo(id);

    if (!user) throw new NotFoundException("유저를 찾을 수 없습니다.");

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
    };
  }
}
