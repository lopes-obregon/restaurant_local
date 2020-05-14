import axios from 'axios';
const api = axios.create({
    baseURL:'http://localhost:3333',
    headers:{'X-Custom-Header': 'foobar'},
})
export default api;
/** 
*axios.defaults.baseURL="http://localhost:3333";
*axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
*axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
*const api = axios;
*/