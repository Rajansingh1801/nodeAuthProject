const express = require("express");
require("./config");
const users = require("./model/user");

const app = express();
app.use(express.json());

app.post("/signup", async (req, resp) => {
  let data = new users(req.body);
  let result = await data.save();
  resp.send(result);
});

app.listen(5500, function () {
  console.log("ready to go chief.....");
});
