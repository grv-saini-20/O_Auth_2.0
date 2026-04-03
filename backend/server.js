import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import session from "express-session";
import cookieParser from "cookie-parser";
import passport from "passport";
import connectDb from "./config/db.js";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";

connectDb();

const PORT = process.env.PORT || 5000;;

const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

app.use(session({
  secret: process.env.SESSION_SECRET, // session secret key
  resave: false, // don't save session if unmodified
  saveUninitialized: false // don't create empty sessions
}));

app.use(passport.initialize()); // initialize passport
// app.use(passport.session()); // persistent login sessions

import "./config/passport.js"; // import passport configuration

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use("/auth", (req, res) => {
    res.send("Auth route");
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

export default app;