"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import submitForm from "@/actions/submitForm";
import { User } from "@prisma/client";

const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  email: z
    .string()
    .min(2)
    .refine(
      (value) => /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(value),
      "Please enter a correct email address"
    ),
  description: z.string().min(2),
});

const ContactForm = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema> & User>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      email: "",
      description: "",
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema> & User) => {
    try {
      await submitForm(values);
      toast({ title: "Your message has been submitted" });
    } catch (error: any) {
      toast({ title: error.message, variant: "destructive" });
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="flex flex-col flex-1">
      <h1 className="text-2xl mb-10">Contact Us</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name={"firstName"}
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="John"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={"email"}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="John@example.com"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={"description"}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="What would you like to know"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isSubmitting} type="submit" className="text-lg">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
