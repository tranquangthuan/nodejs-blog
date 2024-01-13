const express = require("express");
const hbs = require("express-handlebars");
const path = require("path");
const routes = require('./routes')

const app = express();

const port = 3000;
app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.engine("hbs", hbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/resources/views"));


routes(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
