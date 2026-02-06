import { Global, Module } from "@nestjs/common";
import { DB, drizzleProvider } from "./database.provider";

@Global()
@Module({
  providers: [drizzleProvider],
  exports: [DB],
})
export class DatabaseModule {}
