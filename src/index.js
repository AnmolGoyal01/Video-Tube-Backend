import dotenv from "dotenv";
import express from "express";
import connectDb from "./db/index.js";

dotenv.config({
    path : './env'
})

connectDb();
