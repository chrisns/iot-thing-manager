# manage aws iot things from mqtt

Simple c~r~ud interface for managing things in aws iot from mqtt

## Deployed

via [serverless](https://www.serverless.com/)

```bash
serverless deploy
```

## Usage

### Topic

- To **create** a thing, publish to `thingManager/create`
- To **delete** a thing, publish to `thingManager/delete`
- To **update** a thing, publish to `thingManager/update`
- To **upsert** a thing, publish to `thingManager/upsert` (try to update, if that fails create it)

### Payload

see the [aws docs](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Iot.html#updateThing-property) for the available parameters

```json
{
  "thingName": "foobar"
}
```
