import express from 'express'
import nodemailer from 'nodemailer'
import validator from 'validator'
import xssFilters from 'xss-filters'

const app = express()
app.use(express.json())

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendMail = (name, email, msg) => {
  //   const transporter = nodemailer.createTransport({
  //     sendmail: true,
  //     newline: 'unix',
  //     path: '/usr/sbin/sendmail',
  //   })
  //   transporter.sendMail({
  //     from: 'ldavidson45@gmail.com',
  //     to: 'lizdavidson45@gmail.com',
  //     subject: 'New contact form message',
  //     text: msg,
  //   })
  const message = {
    to: 'lizdavidson45@gmail.com',
    from: email,
    subject: 'Test Email!',
    text: msg,
    html: `<strong>${msg}</strong>`,
  }

  sgMail
    .send(message)
    .then(() => {
      console.log('Email sent')
    })
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
  res.status(200)
})

module.exports = {
  path: '/api/',
  handler: app,
}
