import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.16.0.115:3333',

  // Android Emulator: 10.0.2.2
  // Android Device: Server IP
  // iOS Emulator: localhost or 127.0.0.1
  // iOS Device: Server IP
});

export default api;
