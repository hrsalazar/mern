//Lib used to make ajax calls to the API
import axios from 'axios';
import { FETCH_USER } from './types';

const fetchUser = () => {
    //Dispatch is a function from store
    return function(dispatch){
        //ReduxThunk gives the ability to dispatch and action when ever we need it not automatically
        axios
            .get('/api/current_user')
            .then(res => dispatch({ type: FETCH_USER, payload: res }));
    }
};
