"use client";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2Icon } from "lucide-react";
import { toast } from "sonner";

import { authClient } from "@/modules/auth/lib/client";

import { createOrganizationSchema } from "../../validation/create-organization-schema";

import { generateSlug } from "@/lib/utils";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const CreateOrganizationForm = () => {
  const form = useForm<z.infer<typeof createOrganizationSchema>>({
    resolver: zodResolver(createOrganizationSchema),
    defaultValues: {
      name: "",
    },
  });

  const router = useRouter();

  const handleOnSubmit = async (
    values: z.infer<typeof createOrganizationSchema>,
  ) => {
    try {
      const slug = generateSlug(values.name);
      const slugIsValid = await authClient.organization.checkSlug({ slug });
      if (!slugIsValid) {
        form.formState.errors.name = {
          type: "manual",
          message: "This name is already taken",
        };
      }
      const createdOrganization = await authClient.organization.create({
        name: values.name,
        slug,
      });
      router.push(`/o/${createdOrganization.data?.slug}`);
    } catch (_) {
      toast("Unable to create organisation. Please try again.");
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <h2 className="text-foreground mb-4 text-lg leading-none font-semibold tracking-tight">
          Create an organisation
        </h2>
        <p className="text-sm text-[#878787]">
          You might use the name of your team or department.
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleOnSubmit)}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Name</FormLabel>
                <FormControl>
                  <Input
                    disabled={form.formState.isSubmitting}
                    className="placeholder:text-muted-foreground mt-3 flex h-[40px] w-full border bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="My new organisation"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <div className="flex w-full justify-end">
            <Button
              disabled={form.formState.isSubmitting}
              className="bg-primary text-background hover:bg-primary/85 relative h-[40px] w-[100px] font-medium shadow-none hover:cursor-pointer"
              type="submit"
            >
              {form.formState.isSubmitting ? (
                <Loader2Icon className="animate-spin" />
              ) : (
                "Continue"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};
