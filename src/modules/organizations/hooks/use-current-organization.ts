import { useParams } from "next/navigation";
import { trpc } from "@/trpc/client";

export function useCurrentOrganization() {
  const params = useParams();
  const slug = params?.slug as string;

  const { data: organization, isLoading } =
    trpc.organization.getOrganizationBySlug.useQuery(
      { slug },
      {
        enabled: !!slug,
      },
    );

  return {
    organization,
    isLoading,
  };
}
