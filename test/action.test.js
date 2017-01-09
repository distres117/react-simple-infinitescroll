import {expect} from 'chai';
import {getDataAction} from '../src/actions';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

describe('test action', ()=>{
    let store;
    beforeEach(()=>{
        store = configureMockStore([thunk])({});
    });
    it('should get the data', ()=>{
        return store.dispatch(getDataAction())
        .then(()=>{
            expect(store.getActions()[0].payload).to.have.length(100);
        })
    });
});