import { Inject, Injectable } from "@nestjs/common";
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import { eq } from "drizzle-orm";
import { DB } from "src/database/database.provider";
import { users } from "src/database/schema/users";

@Injectable()
export class UserRepository {
  constructor(
    @Inject(DB)
    private readonly db: NodePgDatabase,
  ) {}

  async findById(id: number) {
    return this.db
      .select()
      .from(users)
      .where(eq(users.id, id))
      .limit(1)
      .then((rows) => rows[0] ?? null);
  }
}
