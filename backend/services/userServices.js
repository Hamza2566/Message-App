import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export async function findUserByUsername(username) {
  return prisma.user.findUnique({ where: { username } });
}

export async function createUser({ username, password }) {
  return prisma.user.create({ data: { username, password } });
}
