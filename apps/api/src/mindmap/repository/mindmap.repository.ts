import { Inject, NotFoundException } from "@nestjs/common";
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import { and, eq } from "drizzle-orm";
import { DB } from "src/database/database.provider";
import { mindmaps } from "src/database/schema/mindmap";
import { nodes } from "src/database/schema/node";

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

    // 결과가 비어있다면, 마인드맵이 없거나 내 소유가 아닌 노드들인 것입니다.
    if (!result || result.length === 0) {
      throw new NotFoundException("데이터를 찾을 수 없거나 권한이 없습니다.");
    }

    return result; // 이제 노드 리스트가 반환됩니다.
  }

  //
}
