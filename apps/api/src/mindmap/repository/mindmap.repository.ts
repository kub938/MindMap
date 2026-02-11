import { Inject, NotFoundException } from "@nestjs/common";
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import { and, eq, inArray } from "drizzle-orm";
import { DB } from "src/database/database.provider";
import { mindmaps } from "src/database/schema/mindmap";
import { nodes } from "src/database/schema/node";
import type {
  AddEvent,
  DeleteEvent,
  MoveEvent,
  MoveInfo,
  Node,
  NodeId,
  UpdateEvent,
} from "@repo/shared/dto/mindmap";

export class MindmapRepository {
  constructor(
    @Inject(DB)
    private readonly db: NodePgDatabase,
  ) {}

  async findById(mindmapId: number) {
    const [mindMap] = await this.db
      .select()
      .from(mindmaps)
      .where(eq(mindmaps.id, mindmapId))
      .limit(1);

    return mindMap;
  }

  async findByUser(userId: number) {
    return this.db.select().from(mindmaps).where(eq(mindmaps.userId, userId));
  }

  //Mindmap sql
  async create(userId: number, title: string) {
    const [created] = await this.db
      .insert(mindmaps)
      .values({ userId, title })
      .returning();

    return created;
  }

  async delete(mindmapId: number) {
    await this.db.delete(mindmaps).where(eq(mindmaps.id, mindmapId));
  }

  async getList(userId: number) {
    await this.db.select().from(mindmaps).where(eq(mindmaps.userId, userId));
  }

  async getMindmap(userId: number, mindmapId: number) {
    const result = await this.db
      .select({
        id: nodes.id,
        mindmapId: nodes.mindmapId,
        parentId: nodes.parentId,
        clientId: nodes.clientId,
        content: nodes.content,
        direction: nodes.direction,
        order: nodes.order,
      })
      .from(nodes)
      .innerJoin(mindmaps, eq(nodes.mindmapId, mindmaps.id))
      .where(and(eq(nodes.mindmapId, mindmapId), eq(mindmaps.userId, userId)));

    if (!result || result.length === 0) {
      throw new NotFoundException("데이터를 찾을 수 없거나 권한이 없습니다.");
    }

    return result;
  }

  async addNode(node: AddEvent["node"]) {
    return this.db.insert(nodes).values(node).returning();
  }

  async moveNode(nodeId: MoveEvent["id"], to: MoveEvent["to"]) {
    return this.db
      .update(nodes)
      .set({ parentId: to.parentId, order: to.order })
      .where(eq(nodes.id, nodeId))
      .returning();
  }

  async updateNode(nodeId: UpdateEvent["id"], after: UpdateEvent["after"]) {
    return this.db
      .update(nodes)
      .set(after)
      .where(eq(nodes.id, nodeId))
      .returning();
  }

  async deleteNodes(nodeIds: DeleteEvent["nodes"]) {
    const ids = nodeIds.map((n) => n.id);
    if (ids.length === 0) return [];
    return this.db.delete(nodes).where(inArray(nodes.id, ids)).returning();
  }
}
