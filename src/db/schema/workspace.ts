import { relations } from "drizzle-orm";
import { varchar, pgTable, timestamp, uuid } from "drizzle-orm/pg-core";
import member from "./member";

const workspace = pgTable("workspace", {
  id: uuid("id").primaryKey().defaultRandom().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  imageUrl: varchar("image_url", { length: 255 }),
  createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),
});

export const workspaceRelations = relations(workspace, ({ many }) => ({
  member: many(member),
}));

export default workspace;
