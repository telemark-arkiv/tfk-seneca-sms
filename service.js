'use strict'

const Seneca = require('seneca')
const Mesh = require('seneca-mesh')
const Sms = require('./lib/sms')
const envs = process.env

const options = {
  seneca: {
    tag: envs.TFK_SENECA_SMS_TAG || 'tfk-seneca-sms'
  },
  mesh: {
    auto: true,
    listen: [
      {pin: 'role:sms, cmd:send', model: 'consume'}
    ]
  },
  sms: {
  },
  isolated: {
    host: envs.TFK_SENECA_SMS_HOST || 'localhost',
    port: envs.TFK_SENECA_SMS_PORT || 8000
  }
}

const Service = Seneca(options.seneca)

if (envs.TFK_SENECA_SMS_ISOLATED) {
  Service.listen(options.isolated)
} else {
  Service.use(Mesh, options.mesh)
}

Service.use(Sms, options.sms)
