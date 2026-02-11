ALTER TABLE "nodes" ALTER COLUMN "client_id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "nodes" ALTER COLUMN "client_id" SET NOT NULL;