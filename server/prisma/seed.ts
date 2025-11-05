import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Clean existing data to keep seed idempotent during local development
  await prisma.user.deleteMany();

  await prisma.user.createMany({
    data: [
      {
        email: "employer@example.com",
        name: "Casey Manager",
      },
      {
        email: "employee.one@example.com",
        name: "Jordan Employee",
      },
      {
        email: "employee.two@example.com",
        name: "Taylor Staff",
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error("Seeding failed:", error);
    await prisma.$disconnect();
    process.exit(1);
  });
