ALTER TABLE "mind_maps" RENAME COLUMN "map_id" TO "id";--> statement-breakpoint
ALTER TABLE "mind_maps" RENAME COLUMN "owner_id" TO "user_id";--> statement-breakpoint
ALTER TABLE "mind_maps" ADD CONSTRAINT "mind_maps_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;