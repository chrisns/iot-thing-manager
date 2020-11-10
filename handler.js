const AWS = require('aws-sdk')

const iot = new AWS.Iot()

module.exports.create = params =>
  iot.createThing(params).promise()

module.exports.upsert = params => {
  try {
    iot.updateThing(params).promise()
  } catch (error) {
    iot.createThing(params).promise()
  }
}

module.exports.update = params =>
  iot.updateThing(params).promise()

module.exports.delete = params =>
  iot.deleteThing(params).promise()
