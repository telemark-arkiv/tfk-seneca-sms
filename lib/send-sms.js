'use strict'

const sendSms = require("pswincom-gateway").sendSms
const envs = process.env

module.exports = function doSendSms (args, callback) {
  const receivers = args.receivers
  const message = args.message
  const username = envs.TFK_SENECA_SMS_USERNAME
  const password = envs.TFK_SENECA_SMS_PASSWORD
  const sender = args.sender
  var setup = {
    user: username,
    password: password,
    sender: sender,
    receivers: receivers,
    message: message,
    done: handleResult,
    error: handleError
  }

  if (args.operation) {
    setup.operation = parseInt(args.operation, 10)
  }

  function handleResult (result) {
    callback(null, result)
  }

  function handleError (error) {
   callback(error, null)
  }

  sendSms(setup)
}
