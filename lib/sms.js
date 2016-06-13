'use strict'

const envs = process.env
const sendSms = require('./send-sms')

module.exports = function (options) {
  const seneca = this

  seneca.add('role:sms, cmd:send', sendSms)

  return {
    name: envs.TFK_SENECA_SMS_TAG || 'tfk-seneca-sms'
  }
}
