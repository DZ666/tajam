import instance from "../index.js"

const API = {
  sendMessage(body, config) {
    return instance.post("/api/sendMessage", body, config)
  }
}

export default API
