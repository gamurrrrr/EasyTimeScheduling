import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("🚀 TypeScript backend server running with NodeNext modules!");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
