import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import {
  MindmapCreateRequest,
  MindmapGetRequest,
  NodeEvent,
  MindmapNodeEventProcessRequest,
  MindmapNodeEventProcessResponse,
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
  @IsString()
  @IsNotEmpty()
  readonly mindmapId!: string;
}

export class MindmapNodeProcessRequestDto implements MindmapNodeEventProcessRequest {
  @IsNotEmpty()
  readonly nodeEvents!: NodeEvent[];
}

export class MindmapNodeProcessResponseDto implements MindmapNodeEventProcessResponse {
  @IsNumber()
  @IsNotEmpty()
  readonly id!: number;

  @IsNumber()
  @IsNotEmpty()
  readonly clientId!: number;

  @IsNumber()
  @IsNotEmpty()
  readonly parentId!: number | null;
}
