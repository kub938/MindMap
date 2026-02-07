import { Inject } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import { DB } from "src/database/database.provider";
import { users } from "src/database/schema/users";

export class AuthRepository {
  constructor(
    @Inject(DB)
    private readonly db: NodePgDatabase,
    private jwtService: JwtService,
  ) {}

  async login(googleUser: any) {
    const [user] = await this.db
      .insert(users)
      .values({
        email: googleUser.email,
        name: googleUser.name,
        googleId: googleUser.googleId,
        avatar: googleUser.picture,
      })
      .onConflictDoUpdate({
        target: users.googleId, // googleId가 겹치면
        set: {
          name: googleUser.name, // 이름과 아바타를 최신화
          avatar: googleUser.picture,
        },
      })
      .returning(); // 처리된 유저 데이터를 반환받음

    const payload = {
      sub: user.id,
      email: user.email,
    };

    return {
      accessToken: this.jwtService.sign(payload, {
        expiresIn: "10h",
      }),
    };
  }
}
