import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import {
  MindmapCreateRequestDto,
  MindmapGetRequestDto,
  MindmapNodeProcessRequestDto,
} from "../dto/mindmap.dto";
import { MindmapService } from "./mindmap.service";
import { User } from "src/decorators/user.decorator";
import type { AuthUser } from "src/auth/interface/authUser";

@Controller("mindmap")
export class MindmapController {
  constructor(private readonly MindmapService: MindmapService) {}

  @Post()
  async createMindmap(
    @User() user: AuthUser,
    @Body() body: MindmapCreateRequestDto,
  ) {
    return this.MindmapService.create(user.id, body.title);
  }

  @Get()
  async getMindmaps(@User() user: AuthUser) {
    return this.MindmapService.getList(user.id);
  }

  @Get(":mindmapId")
  async getMindmap(
    @User() user: AuthUser,
    @Param() params: MindmapGetRequestDto,
  ) {
    return this.MindmapService.get(user.id, Number(params.mindmapId));
  }

  @Post("node")
  async nodeEventProcess(@Body() body: MindmapNodeProcessRequestDto) {
    return this.MindmapService.process(body);
  }
}
