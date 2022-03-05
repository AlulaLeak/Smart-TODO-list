/*
 * All routes for Login are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();
const app = express();

module.exports = (db) => {
  router.get("/", (req, res) => {
    const templateVars = {
      userId: null,
    };

    if (templateVars.userId) {
      res.redirect("../");
    }

    res.render("../views/partials/_login.ejs", templateVars);
  });
  router.post("/", (req, res) => {
    console.log("This is the '/' post req.body: ", req.body);

    // This is where we need to set a cookie
  });
  return router;
};
