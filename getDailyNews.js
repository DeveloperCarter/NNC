const express = require("express");
const db = require("./db");
const axios = require("axios");
  let getDailyNews = async () => {
  let headlines = await axios.get(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=8cfa8455f8b642efbfe21084e52092bd"
  );
  let business = await axios.get(
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8cfa8455f8b642efbfe21084e52092bd"
  );
  let science = await axios.get(
    "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=8cfa8455f8b642efbfe21084e52092bd"
  );
  let sports = await axios.get(
    "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=8cfa8455f8b642efbfe21084e52092bd"
  );
  let tech = await axios.get(
    "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=8cfa8455f8b642efbfe21084e52092bd"
  );
  let health = await axios.get(
    "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=8cfa8455f8b642efbfe21084e52092bd"
  );
  await db.query(`TRUNCATE TABLE home_articles`);
  await db.query(`TRUNCATE TABLE business_articles`);
  await db.query(`TRUNCATE TABLE science_articles`);
  await db.query(`TRUNCATE TABLE sports_articles`);
  await db.query(`TRUNCATE TABLE tech_articles`);
  await db.query(`TRUNCATE TABLE health_articles`);
  await Promise.all(
    tech.data.articles.map(
      ({
        title,
        description,
        urlToImage: img,
        url,
        content,
        author,
        source: { name },
      }) =>
        db.query(
          `INSERT INTO tech_articles (title, company_name, img, description, original_url, content, author) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
          [title, name, img, description, url, content, author]
        )
    )
  );
  await Promise.all(
    health.data.articles.map(
      ({
        title,
        description,
        urlToImage: img,
        url,
        content,
        author,
        source: { name },
      }) =>
        db.query(
          `INSERT INTO health_articles (title, company_name, img, description, original_url, content, author) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
          [title, name, img, description, url, content, author]
        )
    )
  );
  await Promise.all(
    sports.data.articles.map(
      ({
        title,
        description,
        urlToImage: img,
        url,
        content,
        author,
        source: { name },
      }) =>
        db.query(
          `INSERT INTO sports_articles (title, company_name, img, description, original_url, content, author) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
          [title, name, img, description, url, content, author]
        )
    )
  );
  await Promise.all(
    science.data.articles.map(
      ({
        title,
        description,
        urlToImage: img,
        url,
        content,
        author,
        source: { name },
      }) =>
        db.query(
          `INSERT INTO science_articles (title, company_name, img, description, original_url, content, author) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
          [title, name, img, description, url, content, author]
        )
    )
  );
  await Promise.all(
    business.data.articles.map(
      ({
        title,
        description,
        urlToImage: img,
        url,
        content,
        author,
        source: { name },
      }) =>
        db.query(
          `INSERT INTO business_articles (title, company_name, img, description, original_url, content, author) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
          [title, name, img, description, url, content, author]
        )
    )
  );
  await Promise.all(
    headlines.data.articles.map(
      ({
        title,
        description,
        urlToImage: img,
        url,
        content,
        author,
        source: { name },
      }) =>
        db.query(
          `INSERT INTO home_articles (title, company_name, img, description, original_url, content, author) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
          [title, name, img, description, url, content, author]
        )
    )
  );
}

module.exports = getDailyNews;
