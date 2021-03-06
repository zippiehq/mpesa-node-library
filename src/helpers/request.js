const axios = require('axios')
module.exports = async function (_baseURL = null) {
  const credentials = await this.oAuth()
  const instance = axios.create({
    baseURL: _baseURL || this.baseURL,
    timeout: 60000,
    headers: {
      'Authorization': 'Bearer ' + credentials.data['access_token'],
      'Content-Type': 'application/json'
    }
  })
  return instance
}
