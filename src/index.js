import dotenv from "dotenv";
import connectDb from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});
const PORT = process.env.PORT || 4000;

connectDb()
  .then(
    app.listen(PORT, () => {
      console.log(`App is listening on port : ${PORT}`);
    })
  )
  .catch((err) => {
    console.log(`Failed to connect to server, ERRR: ${err}`);
  });
