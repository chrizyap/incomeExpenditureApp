const { Router } = require("express");
const express = require("express");
const router = express.Router();
const User = require("../models/UserModal").default;

router.route("/create").post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phonenumber = req.body.phonenumber;
  const dob = req.body.dob;
  const address = req.body.address;
  const disposableIncome = req.body.disposableIncome
  const incomeExpenditureRatio = req.body.incomeExpenditureRatio
  const grade = req.body.grade;

  const newUser = new User({
    name,
    email,
    phonenumber,
    dob,
    address,
    disposableIncome,
    incomeExpenditureRatio,
    grade
  });
  const result = await newUser.save();;
  console.log(result);
  
});

router.route("/users").get((req, res) => {
  User.find().then((foundUsers) => res.json(foundUsers));
});

module.exports = router;
