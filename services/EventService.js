import axios from 'axios'

/**
 * npm install -g json-server
 *
 * json-server--watch db.json --port 3001
 *
 */

const apiClient = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/events')
  }
}
