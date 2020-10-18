import express from "express";
import cors from "cors";
import routes from "./routes/routes";
import swaggerDocs from "./swaggerDocs";
import errorHandler from "./routes/errorHandler";

const mongoose = require("mongoose");
const app = express();

mongoose.connect(
  "mongodb+srv://adm:0000@cluster0.0ro73.mongodb.net/<dbname>?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

swaggerDocs(app)

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errorHandler)

app.listen("3333");
