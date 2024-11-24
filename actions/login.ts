"use server";
import * as z from "zod";
import { LoginSchema } from "@/schemas";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validateFields = LoginSchema.safeParse(values);

  if (!validateFields.success) {
    return { errors: "Invalid fields!" };
  }
  return { success: "Email Sent!" };
};
