import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { DatabaseModule } from "./database/database.module";
import { ConfigModule } from "@nestjs/config";
import { MindMapModule } from "./mindmap/domain/mindmap.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UserModule,
    AuthModule,
  ], // 여기서 사용할 다른 모듈들
  controllers: [AppController], //요청받는 통로
  providers: [AppService], //생성, 주입할 객체들의 명단
  exports: [], // 다른모듈에도 쓸 수 있도록 내보낼 부품 목록, js의 export와 다른점은 이미 생성된 객체를 빌려주는것
})
export class AppModule {}
