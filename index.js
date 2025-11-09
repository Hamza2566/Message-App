import { PrismaClient } from '@prisma/client';
import bcrypt from "bcryptjs";
const prisma = new PrismaClient();


async function main() {
    const password = 'mypassword123';
     const hashed = await bcrypt.hash(password,10)
  const user = await prisma.user.create({
    data: {
      username: 'xamse',
      email: 'xamse@example.com',
      password: hashed,
    },
  });
  console.log('User added:', user);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
