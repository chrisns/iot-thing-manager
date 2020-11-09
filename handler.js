const AWS = require('aws-sdk')

const iot = new AWS.Iot()

module.exports.create = params =>
  iot.createThing(params).promise()

module.exports.upsert = params =>
  iot.updateThing(params).promise()
    .catch(() => {
      console.log(`couldn't update ${params.thingName} trying to create it`)
      return iot.createThing(params).promise()
    })


module.exports.update = params =>
  iot.updateThing(params).promise()

module.exports.delete = params =>
  iot.deleteThing(params).promise()
