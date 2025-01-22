const express = require("express");

const app = express();

// This will only handle GET call to /user
app.get("/user/:userId/:name/:password", (req, res) => {
  console.log(req.params);
  res.send({ firstName: "Pranjal", lastName: "Chandel" });
});

// this will match all the HTTP method API calls to /test
app.use("/user", (req, res) => {
  res.send("Hello from the server!");
});

app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000...");
});
