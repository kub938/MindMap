import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe, VersioningType } from "@nestjs/common";
import cookieParser from "cookie-parser";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true, // DTO에 없는 속성이 들어오면 에러 발생
      transform: true, // 데이터를 DTO 타입에 맞게 자동 형변환
    }),
  );

  app.setGlobalPrefix("api");

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: "1",
  });

  app.use(cookieParser());

  await app.listen(process.env.PORT!);
}

bootstrap();
