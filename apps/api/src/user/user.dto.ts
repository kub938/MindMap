import { UserInfo } from "@repo/shared/dto/user";
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
} from "class-validator";

export class UserInfoDto implements UserInfo {
  @IsNumber()
  @IsNotEmpty()
  readonly id!: number;

  @IsString()
  @IsNotEmpty()
  readonly name!: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email!: string;

  @IsUrl()
  @IsNotEmpty()
  readonly avatar!: string;
}
