import React from 'react';
import {connect} from 'react-redux';
import {testAction} from '../actions';

export default connect(s=>s)(props=>{

    return (
        <div>
            <h1>Hello, from a dumb component</h1><i className='glyphicon glyphicon-play'/>
            <h1>{props.testString}</h1>
        </div>
    )
})  