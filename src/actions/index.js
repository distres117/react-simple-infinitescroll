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