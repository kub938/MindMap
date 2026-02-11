import {
  pgTable,
  serial,
  integer,
  text,
  timestamp,
  real,
  pgEnum,
  foreignKey,
  uuid,
} from "drizzle-orm/pg-core";
import { mindmaps } from "./mindmap";

export const nodeDirectionEnum = pgEnum("node_direction", [
  "left",
  "right",
  "root",
]);

export const nodes = pgTable(
  "nodes",
  {
    id: serial("id").primaryKey(),
    mindmapId: integer("mindmap_id").notNull(),
    parentId: integer("parent_id"),
    clientId: uuid("client_id").notNull(),
    content: text("content").notNull(),
    direction: nodeDirectionEnum("direction").notNull(),
    order: real("order"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => ({
    mindmapFk: foreignKey({
      columns: [table.mindmapId],
      foreignColumns: [mindmaps.id],
      name: "nodes_mindmap_id_fk",
    }).onDelete("cascade"),

    parentFk: foreignKey({
      columns: [table.parentId],
      foreignColumns: [table.id],
      name: "nodes_parent_id_fk",
    }).onDelete("cascade"),
  }),
);
