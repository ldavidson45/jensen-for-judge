import express from 'express'
import nodemailer from 'nodemailer'
import validator from 'validator'
import xssFilters from 'xss-filters'

const app = express()
app.use(express.json())

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendMail = (name, email, msg) => {
  const message = {
    to: 'lizdavidson45@gmail.com',
    from: email,
    subject: `Campaign Website - New Email from ${name}`,
    text: msg,
    html: `
    <div><strong>From:</strong> ${name}</div>
    <div><strong>Email:</strong> ${email}</div>
   <div> <strong>Message:</strong></div>
    <p style="white-space: pre-line">${msg}</p>`,
  }

  sgMail
    .send(message)
    .then(() => {})
    .catch((error) => {
      console.error(error)
    })
}

const rejectFunctions = new Map([
  ['name', (v) => v.length < 2],
  ['email', (v) => !validator.isEmail(v)],
  ['msg', (v) => v.length < 10],
])
const validateAndSanitize = (key, value) => {
  // If map has key and function returns false, return sanitized input. Else, return false
  return (
    rejectFunctions.has(key) &&
    !rejectFunctions.get(key)(value) &&
    xssFilters.inHTMLData(value)
  )
}

app.post('/email', (req, res) => {
  const attributes = ['name', 'email', 'msg'] // Our three form fields, all required

  // Map each attribute name to the validated and sanitized equivalent (false if validation failed)
  const sanitizedAttributes = attributes.map((n) =>
    validateAndSanitize(n, req.body[n])
  )

  // True if some of the attributes new values are false -> validation failed
  const someInvalid = sanitizedAttributes.some((r) => !r)

  if (someInvalid) {
    return res.status(422).json({ error: 'Ugh.. That looks unprocessable!' })
  }

  sendMail(...sanitizedAttributes)
  res.status(200).json('success')
})

module.exports = {
  path: '/api/',
  handler: app,
}
