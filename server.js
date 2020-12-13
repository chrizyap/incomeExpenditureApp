const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

//connect to mongoose
// mongoose.connect(
//   "mongodb+srv://chrizyap2:james@cluster0.mj0is.mongodb.net/ophelosDB?retryWrites=true&w=majority"
// );

mongoose.connect(
  process.env.DB_CONNECTION_STRING,
  { useNewUrlParser: true, useUnifiedTopology: true },

  (err) => {
    if (err) {
      console.error(`Connection Error:${err}`);
    } else console.log("Connected to DB");
  }
);

//require the route

app.use("/", require("./src/routes/UserRoute"));

// app.listen(3000, function () {
//   console.log(":::express server is running::");
// });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
