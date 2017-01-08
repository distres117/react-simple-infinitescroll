import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import * as redux from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import TestComponent from './components/test.component';
import {testAction} from './actions';

const store = redux.createStore(reducers,{},
    redux.compose(redux.applyMiddleware(thunk), window.devToolsExtension()));
store.dispatch(testAction());
ReactDOM.render(
    <Provider store={store}>
        <TestComponent/>
    </Provider>,
    document.getElementById('app')
)