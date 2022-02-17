const express = require("express");
const router = express.Router();
const axios = require("axios");
const db = require("../db");
const cron = require("node-cron");
const getDailyNews = require("../getDailyNews")
router.get("/headlines", async function (req, res, next) {
  try {
    setInterval(await getDailyNews, 1000 * 60 * 60 * 24);
    let dbInfo = await db.query(`SELECT * FROM home_articles LIMIT 14`);
    res.send(dbInfo.rows);
  } catch (err) {
    next(err);
  }
  router.get("/business", async function (req, res, next) {
    try {
      let response = await db.query(`SELECT * FROM business_articles LIMIT 14`);
      return res.send(response.rows);
    } catch (err) {
      next(err);
    }
  });
  router.get("/science", async function (req, res, next) {
    try {
      let response = await db.query(`SELECT * FROM science_articles LIMIT 14`);
      return res.send(response.rows);
    } catch (err) {
      next(err);
    }
  });
  router.get("/health", async function (req, res, next) {
    try {
      let response = await db.query(`SELECT * FROM health_articles LIMIT 14`);
      return res.send(response.rows);
    } catch (err) {
      next(err);
    }
  });
  router.get("/tech", async function (req, res, next) {
    try {
      let response = await db.query(`SELECT * FROM tech_articles LIMIT 14`);
      return res.send(response.rows);
    } catch (err) {
      next(err);
    }
  });
  router.get("/sports", async function (req, res, next) {
    try {
      let response = await db.query(`SELECT * FROM sports_articles LIMIT 14`);
      return res.send(response.rows);
    } catch (err) {
      next(err);
    }
  });
});
module.exports = router;
