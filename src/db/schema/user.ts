import { relations } from "drizzle-orm";
import {
  pgSchema,
  varchar,
  pgTable,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

import member from "./member";

const auth = pgSchema("auth");
const authUser = auth.table("users", {
  id: uuid("id").primaryKey(),
});

const user = pgTable("user", {
  id: uuid("id")
    .primaryKey()
    .references(() => authUser.id)
    .notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  imageUrl: varchar("image_url", { length: 255 }),
  createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),
});

export const userRelations = relations(user, ({ many }) => ({
  member: many(member),
}));

export default user;
