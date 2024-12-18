import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient({ log: ['query'] });
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.update({
    where: {
      email: 'shaharsaadon1@gmail.com',
    },
    data: {
      email: 'salley@test.com',
    },
  });

  // const user = await prisma.user.findMany({
  //   where: {
  //     name: { not: 'Shahar' },
  //     email: { endsWith: '.com' },
  //     age: { lte: 30 },
  //   },
  //   take: 2,
  //   orderBy: {
  //     age: 'desc',
  //   },
  //   skip: 1,
  // });
  // const users = await prisma.user.createMany({
  //   data: [
  //     {
  //       name: 'Shahar',
  //       email: 'Shaharsaadon334561@gmail.com',
  //       age: 26,
  //     },
  //     {
  //       name: 'Salley',
  //       email: 'Salle43453435y@gmail.com',
  //       age: 26,
  //     },
  //   ],
  // });
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Shahar',
  //     email: 'Shaharsaadon1@gmail.com',
  //     age: 26,
  //     userPreference: {
  //       create: {
  //         emailUpdates: true,
  //       },
  //     },
  //   },
  //   include: {
  //     userPreference: true,
  //   },
  // });
  console.log(user);
}

main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
