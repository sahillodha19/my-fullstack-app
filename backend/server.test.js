const request = require("supertest");
const express = require("express");

const app = express();
app.get("/", (req, res) => res.send("Hello from Backend!"));

test("GET / should return Hello from Backend!", async () => {
  const res = await request(app).get("/");
  expect(res.text).toBe("Hello from Backend!");
});
