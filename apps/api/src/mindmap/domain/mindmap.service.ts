import { Injectable } from "@nestjs/common";
import { MindmapRepository } from "../repository/mindmap.repository";
import { MindmapNodeProcessRequestDto } from "../dto/mindmap.dto";
import { NodeEvent, UpdateEvent } from "@repo/shared/dto/mindmap";

@Injectable()
export class MindmapService {
  constructor(private readonly mindmapRepository: MindmapRepository) {}

  async create(userId: number, title: string) {
    return this.mindmapRepository.create(userId, title);
  }

  async getList(userId: number) {
    return this.mindmapRepository.findByUser(userId);
  }

  async get(userId: number, mindmapId: number) {
    return this.mindmapRepository.getMindmap(userId, mindmapId);
  }

  async process(body: MindmapNodeProcessRequestDto) {
    const { nodeEvents } = body;
    const results = [];
    for (const event of nodeEvents) {
      const result = await this.handleEvent(event);
      results.push(result);
    }

    return results;
  }

  private async handleEvent(event: NodeEvent) {
    let resultNode = null;
    switch (event.type) {
      case "ADD":
        resultNode = await this.mindmapRepository.addNode(event.node);
        break;
      case "MOVE":
        resultNode = await this.mindmapRepository.moveNode(event.id, event.to);
        break;
      case "UPDATE":
        resultNode = await this.mindmapRepository.updateNode(
          event.id,
          event.after,
        );
        break;
      case "DELETE":
        resultNode = await this.mindmapRepository.deleteNodes(event.nodes);
        break;
      default:
        throw new Error("Unknown event type");
    }

    if (resultNode === null) throw new Error("resultNode is null");

    const res = {
      id: resultNode[0].id,
      clientId: resultNode[0].clientId,
      parentId: resultNode[0].parentId,
    };

    return res;
  }
}
