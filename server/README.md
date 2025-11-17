# Backend

## Backend & Database Setup

1. **Install prerequisites**

   - Node.js 18+ and npm installed locally.
   - MySQL installed and running locally (`brew install mysql`, then `brew services start mysql`).

2. **Install backend dependencies**

   ```bash
   cd server
   npm install
   ```

3. **Create database + user**

   ```sql
   CREATE DATABASE easytime;
   CREATE USER 'easytime_app'@'localhost' IDENTIFIED BY 'password';
   GRANT CREATE, ALTER, DROP, REFERENCES ON *.* TO 'easytime_app'@'localhost' WITH GRANT OPTION;
   FLUSH PRIVILEGES;
   ```

4. **Configure environment**

   - Copy `server/.env.example` to `server/.env`.
   - Update `DATABASE_URL` to point at your MySQL instance, e.g.  
     `DATABASE_URL="mysql://easytime_app:password@localhost:3306/easytime"`.

5. **Migrate & generate Prisma client**

   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

6. **Seed test data**

   ```bash
   npx prisma db seed
   ```

   This loads sample employer/employee accounts defined in `server/prisma/seed.ts`.

7. **Run the backend**

   ```bash
   npm run dev
   ```

   - Health check: `GET http://localhost:5000/health`
   - View seeded users quickly: `GET http://localhost:5000/users`

8. **Troubleshooting**

- If Prisma can’t connect, confirm MySQL is running and credentials match `.env`.
- Rerun `npx prisma migrate dev` after any schema change; rerun `npx prisma db seed` to refresh sample data.
