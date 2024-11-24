"use server";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(values);

  if (!validateFields.success) {
    return { errors: "Invalid fields!" };
  }
  return { success: "Email Sent!" };
};
