import express from "express";
import dotenv from "dotenv";
import corsMiddleware from "./src/middleware/cors.js";
import { jsonParser, urlencodedParser } from "./src/middleware/bodyParser.js";
import emailRoutes from "./src/routes/emailRoutes.js";
import newsletterRoutes from "./src/routes/newsletterRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(corsMiddleware);
app.use(jsonParser);
app.use(urlencodedParser);

// Routes
app.use("/api", emailRoutes);
app.use("/api", newsletterRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
