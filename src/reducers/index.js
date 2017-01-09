import {combineReducers} from 'redux';

const testReducer = (state='',action)=>{
    switch(action.type){
        case 'TEST_ACTION':
            return action.payload;
        default:
            return state;
    }
}
const dataReducer = (state=[], action)=>{
    if (action.type==='GOT_DATA')
        return state.concat(action.payload);
    else
        return state;
}

export default combineReducers({
    testString: testReducer,
    tableData: dataReducer
})