"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2Icon } from "lucide-react";
import { toast } from "sonner";

import { useForm } from "@tanstack/react-form";

import { loginSchema } from "../../validation";

import { authClient } from "../../lib/auth-client";

import { FormWrapper } from "./form-wrapper";
import { SocialButtons } from "./social-buttons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const LoginForm = () => {
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onChange: loginSchema,
    },
    onSubmit: async ({ value }) => {
      await authClient.signIn.email(
        {
          email: value.email,
          password: value.password,
        },
        {
          onError: () => {
            toast("An error occured. Please try again.");
          },
          onSuccess: () => {
            router.refresh();
          },
        },
      );
    },
  });

  return (
    <div>
      <h1 className="text-foreground pb-1 text-3xl font-medium">
        Welcome back
      </h1>
      <SocialButtons />
      <FormWrapper>
        <div className="py-2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
            className="flex flex-col gap-3"
          >
            <form.Field
              name="email"
              children={(field) => (
                <>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
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
              name="password"
              children={(field) => (
                <>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
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
            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit, isSubmitting]) => (
                <Button type="submit" disabled={!canSubmit}>
                  {isSubmitting ? (
                    <Loader2Icon className="text-foreground h-[40px] animate-spin hover:cursor-pointer" />
                  ) : (
                    "Continue"
                  )}
                </Button>
              )}
            />
          </form>
          <p className="py-2 text-xs text-[#878787]">
            Don{"."}t have an account?{" "}
            <Link className="hover:underline" href="/log-in">
              Click here
            </Link>{" "}
            to create one.
          </p>
        </div>
      </FormWrapper>
    </div>
  );
};
