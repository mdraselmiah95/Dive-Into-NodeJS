const express = require("express");
const userRouter = require("./UserRouter");
const postRouter = require("./postRoute");

const app = express();

const PORT = process.env.PORT || 4040;

// User Router

//User Router End 🔚

app.use("/user", userRouter);
app.use("/posts", postRouter);

// app.get("/products/:productId/reviews/:reviewId", (req, res) => {
//   console.log(req.params);
//   res.send("I am Product" + req.params.productId);
// });

app.get("/", (req, res) => {
  res.send(`Server is Running 🏃‍♂️`);
});

app.listen(PORT, () => {
  console.log(`App is Running on PORT ${PORT}`);
});
