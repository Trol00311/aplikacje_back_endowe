import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import api from "./rout.js";

const application = express();
const port = 5000;

application.use(bodyParser.json());
application.use(cors());
application.use("/", api);

application.listen(port, () =>
  console.log(`Port : ${port}`)
);


