import React from 'react';
import {connect} from 'react-redux';
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table';
import {getDataAction} from '../actions';
import Waypoint from 'react-waypoint';

class DataTable extends React.Component{
    constructor(props){
        super(props);
        this.tableStyle = {
            maxHeight: '500px',
            overflowY:'scroll'
        };
        this.state = {loading:false};
    }
    componentDidMount(){
        this.props.dispatch(getDataAction());
    }
    loadMore(){
        this.props.dispatch(getDataAction);
        this.setState({loading:true});
    }
    render(){
        return (
            <div style={this.tableStyle}>
                <BootstrapTable data={this.props.tableData} striped={true} hover={true}>
                    <TableHeaderColumn dataField='id' isKey={true} >Id</TableHeaderColumn>
                    <TableHeaderColumn dataField='firstName' dataSort={true}>First name</TableHeaderColumn>
                    <TableHeaderColumn dataField='lastName' dataSort={true}>Last name</TableHeaderColumn>
                    <TableHeaderColumn dataField='title' dataSort={true}>Title</TableHeaderColumn>
                    <TableHeaderColumn dataField='city' dataSort={true}>City</TableHeaderColumn>
                    <TableHeaderColumn dataField='state' dataSort={true}>State</TableHeaderColumn>
                </BootstrapTable>
                <Waypoint onEnter={()=>this.props.dispatch(getDataAction())} onExit={()=>this.setState({loading:false})}/>
                <span hidden={this.state.loading}>Loading...</span>
            </div>
        )
    }
}

export default connect(s=>s)(DataTable);