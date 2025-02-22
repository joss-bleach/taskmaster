import { pgTable, timestamp, uuid, index, varchar } from "drizzle-orm/pg-core";

import user from "./user";
import workspace from "./workspace";
import { relations } from "drizzle-orm";

const member = pgTable(
  "member",
  {
    id: uuid("id").primaryKey().defaultRandom().notNull(),
    userId: uuid("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    workspaceId: uuid("workspace_id")
      .notNull()
      .references(() => workspace.id, { onDelete: "cascade" }),
    role: varchar("role", {
      enum: ["member", "admin", "moderator"],
      length: 255,
    })
      .notNull()
      .default("member"),
    createdAt: timestamp("created_at", { mode: "string" })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "string" })
      .notNull()
      .defaultNow(),
  },
  (table) => [
    index("workspace_user_idx").on(table.workspaceId, table.userId),
    index("workspace_role_idx").on(table.workspaceId, table.role),
    index("user_idx").on(table.userId),
  ],
);

export const memberRelations = relations(member, ({ one }) => ({
  user: one(user, {
    fields: [member.userId],
    references: [user.id],
  }),
  workspace: one(workspace, {
    fields: [member.workspaceId],
    references: [workspace.id],
  }),
}));

export default member;
