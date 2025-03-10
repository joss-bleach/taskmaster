import { db } from "..";
import { eq } from "drizzle-orm";
import { organization } from "../schema";

export async function getOrganizationBySlug({ slug }: { slug: string }) {
  const result = await db
    .select()
    .from(organization)
    .where(eq(organization.slug, slug))
    .limit(1);

  return result[0] || null;
}
