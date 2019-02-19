//Lib used to make ajax calls to the API
import axios from 'axios';
import { FETCH_USER } from './types';

const fetchUser = () => {
    axios.get('/api/current_user', FETCH_USER);

};
