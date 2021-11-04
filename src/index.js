const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const Recaptcha = require("express-recaptcha").RecaptchaV2
const formData = require("form-data")
const Mailgun = require("mailgun.js")
const mailgun = new Mailgun(formData)
const {check, validationResult} = require("express-validator")

const validation = [
    check("name", "A valid name is required").not().isEmpty().trim().escape(),
    check("email", "Please provide a valid email").isEmail(),
    check("subject").optional().trim().escape(),
    check("message", "A message of 2000 characters or less is required").trim().escape().isLength({min:1, max:2000})
]