const express = require("express");
const userRouter = require("./router");

const app = express();

const PORT = process.env.PORT || 4040;

// User Router

//User Router End 🔚

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send(`Server is Running 🏃‍♂️`);
});

app.listen(PORT, () => {
  console.log(`App is Running on PORT ${PORT}`);
});
