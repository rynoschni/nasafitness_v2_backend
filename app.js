const express = require("express"),
  path = require("path"),
  helmet = require("helmet"),
  morgan = require("morgan"),
  session = require("express-session");

require("dotenv").config();

const PORT = process.env.PORT || 3333;
const app = express();
const logger = morgan(tiny);

app.use(logger);
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: "make it rad",
  resave: false,
  saveUninitialized: true,
  is_logged_in: false
}
));

app.listen(PORT, () => {
  console.log(`YO JOE!  Coming in hot on http://localhost:${PORT}`)
});

app.use('/', require('./routes/index'));
app.use('/user', require('./routes/user'));
app.use("/admin", require("./routes/user"));

