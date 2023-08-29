// trigger deploy the func pls
const express = require("express");
// eslint-disable-next-line new-cap
const router = express.Router();
// another comment
const dbConnection = require("../db");

router.get("/data", (req, res) => {
  const sqlQuery = req.query.sqlQuery;
  dbConnection.query(sqlQuery, (err, results) => {
    if (err) {
      console.error("Database query error:", err);
      res.status(500).json({error: "Server error"});
      return;
    }
    res.send(JSON.stringify(results));
  });
});

module.exports = router;
