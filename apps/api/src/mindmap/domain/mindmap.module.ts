import { Module } from "@nestjs/common";
import { MindmapController } from "./mindmap.controller";
import { MindmapService } from "./mindmap.service";
import { MindmapRepository } from "../repository/mindmap.repository";

@Module({
  controllers: [MindmapController],
  providers: [MindmapService, MindmapRepository],
  exports: [MindmapRepository],
})
export class MindMapModule {}
