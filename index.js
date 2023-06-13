const express = require("express");
const app = express();
const db = require("../user_courses_seq/models");
app.use(express.json());
const coursesRouter = require("./routes/courses")
const userRouter = require("./routes/user")
app.use("/api/user", userRouter);
//app.use("/api/course", coursesRouter);


db.sequelize.sync().then((req) =>{
  app.listen(3001, () => {
    console.log(`Listening in port 3001`);
  });
});