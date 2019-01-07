import axios from 'axios'
import config from './config'


export default function(obj) {
  const options = {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer' + config.API_KEY,
      'Content-Type': 'application/json'
    },
    url: 'https://api.sendgrid.com/v3/mail/send',
    data: {
      "personalizations": [{
        "to": [{
          "email": "vandiepen.international@gmail.com"
        }]
      }],
      "from": {
        "email": obj.email
      },
      "subject": obj.name + '-' + obj.caseOption + '-' + obj.websiteUseCase,
      "content": [{
        "type": "text/plain",
        "value": obj.description
      }]
    }
  }
  return {
  axios(options)
  }
}
