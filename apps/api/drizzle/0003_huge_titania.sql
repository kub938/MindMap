CREATE TYPE "public"."node_direction" AS ENUM('left', 'right', 'root');--> statement-breakpoint
CREATE TABLE "nodes" (
	"id" serial PRIMARY KEY NOT NULL,
	"mindmap_id" integer NOT NULL,
	"parent_id" integer,
	"client_id" integer,
	"content" text NOT NULL,
	"direction" "node_direction" NOT NULL,
	"order" real,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "nodes" ADD CONSTRAINT "nodes_mindmap_id_fk" FOREIGN KEY ("mindmap_id") REFERENCES "public"."mind_maps"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "nodes" ADD CONSTRAINT "nodes_parent_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."nodes"("id") ON DELETE cascade ON UPDATE no action;