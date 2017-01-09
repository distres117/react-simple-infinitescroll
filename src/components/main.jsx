import React from 'react';
import {connect} from 'react-redux';
import DataTable from './datatable';

export default connect(s=>s)(props=>{
    return (
        <div className='container'>
            <DataTable/>
        </div>
    )
});