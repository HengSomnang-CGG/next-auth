import { PrismaClient } from "@prisma/client";

declare global {
  const prisma: PrismaClient;
}

export const db = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
