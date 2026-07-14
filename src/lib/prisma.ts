import { createPrismaClient } from "./prisma-client-shim.js";

const globalForPrisma = global as unknown as { prisma: ReturnType<typeof createPrismaClient> };

function makeClient() {
	return createPrismaClient();
}

export const prisma = globalForPrisma.prisma || makeClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
