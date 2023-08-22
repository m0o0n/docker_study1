import axios from "axios";

const $HostInstance = axios.create({ baseURL: 'http://localhost:5000/api/' })


export { $HostInstance }