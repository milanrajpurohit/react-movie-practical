/*************
 API BASE URL
 **************/
import axios from 'axios';

export default axios.create({
    baseURL: `http://10.2.2.52:5022/api/`
});