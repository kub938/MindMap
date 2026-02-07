import { Injectable } from "@nestjs/common";
import { MindmapRepository } from "../repository/mindmap.repository";

@Injectable()
export class MindmapService {
  constructor(private readonly mindMapRepository: MindmapRepository) {}

  async create(userId: number, title: string) {
    return this.mindMapRepository.create(userId, title);
  }

  async getList(userId: number) {
    return this.mindMapRepository.findByUser(userId);
  }

  async get(userId: number, mindmapId: number) {
    return this.mindMapRepository.getMindmap(userId, mindmapId);
  }
}
