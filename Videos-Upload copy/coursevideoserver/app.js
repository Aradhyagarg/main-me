import express from "express"
import { config } from "dotenv";
import course from "./routes/courseRoutes.js"
import user from "./routes/userRoutes.js"
import payment from "./routes/paymentRoutes.js"
import other from "./routes/otherRoutes.js"
import { ErrorMiddleware } from "./middlewares/Error.js";
import cookieParser from "cookie-parser";

config({
    path: "./ config/config.env"
});
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({
    extended: true
}));

app.use("/api/v1", course);
app.use("/api/v1", user);
app.use("/api/v1", payment);
app.use("/api/v1", other);

export default app;

app.use(ErrorMiddleware); // when we do not have any handler in this then this call