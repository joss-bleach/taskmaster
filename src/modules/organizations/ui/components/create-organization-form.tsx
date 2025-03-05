"use client";
import { useRouter } from "next/navigation";
import { Loader2Icon } from "lucide-react";
import { toast } from "sonner";

import { env } from "@/config/env";

import { useForm } from "@tanstack/react-form";

import { createOrganizationSchema } from "../../validation";

import { authClient } from "@/modules/auth/lib/auth-client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const CreateOrganizationForm = () => {
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      name: "",
      slug: "",
    },
    validators: {
      onChange: createOrganizationSchema,
    },
    onSubmit: async ({ value }) => {
      await authClient.organization.create(
        {
          name: value.name,
          slug: value.slug,
        },
        {
          onSuccess: () => {
            toast("Organization created successfully");
            router.push(`/o/${value.slug}`);
          },
          onError: () => {
            toast("Coult not create organization. Please try again.");
          },
        },
      );
    },
  });

  return (
    <div>
      <h1 className="text-foreground pb-1 text-xl font-medium">
        Create an organization
      </h1>
      <div className="py-2">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
          className="flex flex-col gap-3"
        >
          <form.Field
            name="name"
            children={(field) => (
              <>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <Input
                  type="text"
                  placeholder="Enter an name"
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground h-[40px]"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {typeof field.state.meta.errors[0] === "object" && (
                  <span className="text-xs font-medium text-rose-600">
                    {field.state.meta.errors[0].message}
                  </span>
                )}
              </>
            )}
          />
          <form.Field
            name="slug"
            children={(field) => (
              <>
                <label htmlFor="slug" className="sr-only">
                  Slug
                </label>
                <Input
                  id="slug"
                  type="text"
                  placeholder="Enter a slug"
                  className="border-border text-foreground placeholder:text-muted-foreground h-[40px]"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                <p className="text-xs text-[#878787]">
                  {env.NEXT_PUBLIC_APP_URL}/o/{field.state.value}
                </p>
                {typeof field.state.meta.errors[0] === "object" && (
                  <span className="text-xs font-medium text-rose-600">
                    {field.state.meta.errors[0].message}
                  </span>
                )}
              </>
            )}
          />
          <div className="flex w-full justify-end">
            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit, isSubmitting]) => (
                <Button
                  className="flex w-[100px] flex-row items-center justify-center"
                  type="submit"
                  disabled={!canSubmit}
                >
                  {isSubmitting ? (
                    <Loader2Icon className="bg-background text-foreground h-[40px] animate-spin hover:cursor-pointer" />
                  ) : (
                    "Continue"
                  )}
                </Button>
              )}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
