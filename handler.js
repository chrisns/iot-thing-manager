const AWS = require('aws-sdk')

const iot = new AWS.Iot()

module.exports.create = params =>
  iot.createThing(params).promise()

module.exports.upsert = params => {
  var response
  try {
    response = iot.updateThing(params).promise()
  } catch (error) {
    console.log(`couldn't update ${params.thingName} trying to create it`)
    response = iot.createThing(params).promise()
  }
  return response
}

module.exports.update = params =>
  iot.updateThing(params).promise()

module.exports.delete = params =>
  iot.deleteThing(params).promise()
