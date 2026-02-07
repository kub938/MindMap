import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import {
  MindmapCreateRequest,
  MindmapGetRequest,
} from "@repo/shared/dto/mindmap";

export class MindmapCreateRequestDto implements MindmapCreateRequest {
  @IsString()
  @IsNotEmpty()
  readonly title!: string;
}

export class MindmapGetListRequestDto {
  @IsNumber()
  @IsNotEmpty()
  readonly userId!: number;
}

export class MindmapGetRequestDto implements MindmapGetRequest {
  @IsNumber()
  @IsNotEmpty()
  readonly mindmapId!: number;
}
