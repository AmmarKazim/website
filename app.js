import express from "express";
import ejs from "ejs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const _views = path.join(__dirname, "views");
const _public = path.join(__dirname, "public");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(_public));

app.set("views", _views);
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.get("/skills", (req, res) => {
  res.render("pages/skills");
});

app.get("/projects", (req, res) => {
  res.render("pages/projects");
});

app.get("/contact", (req, res) => {
  res.render("pages/contact");
});

app.listen(port, () => {
  console.log("app listening at port " + port);
});
