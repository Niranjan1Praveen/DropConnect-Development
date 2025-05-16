import { PrismaClient } from '@/generated/prisma'; // use alias if you have one
// or if you're not using alias
// import { PrismaClient } from '../generated/prisma';

const globalForPrisma = globalThis;

if (!globalForPrisma.prisma) {
  globalForPrisma.prisma = new PrismaClient();
}

const prisma = globalForPrisma.prisma;

export default prisma;
