import twilio from 'twilio'

export const call = (req, res) => {
  // let callDetails = {
  //   to: '+18017933846',
  //   from: '+18017934181',
  //   url: 'config/phone/receive'
  // }
  // let client = twilio('accountsid', 'authtoken')
  // client.makeCall(callDetails, (err, data) => {})
  res.json({ hello: 'world' })
}

export const receive = (req, res) => {
  let twiml = new twilio.TwimlResponse()
  twiml.say('Hello World!')

  res.writeHead(200, {'Content-Type': 'text/xml'})
  res.end(twiml.toString())
}
