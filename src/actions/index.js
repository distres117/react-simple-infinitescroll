import axios from 'axios';
const client = axios.create({baseURL: 'http://localhost:3000'});

export const testAction = ()=>{
    return (dispatch, getState)=>{
        return setTimeout(()=>{
            dispatch({
                type: 'TEST_ACTION',
                payload: 'REDUX WORKS!'
            })
        }, 2000);
    }
    
}

export const getDataAction = ()=>{
    return (dispatch, getState)=>{
        return client.get('/api')
        .then(res=>{
            dispatch({
                type: 'GOT_DATA',
                payload: res.data.rows
            })
        });
    }
}