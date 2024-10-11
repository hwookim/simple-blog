const express = require("express");
const cors = require("cors");
const ENV = require("./config/env");

const app = express();

app.use(express.json());
app.use(cors());

const rootRouter = require("./routers");
app.use("/api", rootRouter);

app.listen(ENV.PORT, () => {
  console.log(`connect server port ${ENV.PORT}`);
});
