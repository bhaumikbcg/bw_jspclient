import React, { Component } from 'react';
import test from '../bw_src/BW_TableManagerTest'
export default class Dropdown extends Component{
    constructor(){
        super()
        this.state = {value: 'test'};

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({value: event.target.value});
    }
    getValue(){
        return this.selectValue.value;
    }

    render(){
        return(
            <div className="col-sm">
            <form>
                <div className="form-group">
                    <label for="bw_test">Boardwalk Test</label>
                    <select value={this.state.value} onChange={this.handleChange} className="form-control form-control-sm"  id="bw_test" >
                        <option value="test">Test</option>
                        <option value="testTableManager">testTableManager</option>
                        <option value="testcolumns">testcolumns</option>
                        <option value="testrows">testrows</option>
                        <option value="testcells">testcells</option>
                        <option value="testCellByRow">testCellByRow</option>
                        <option value="testCellByColumn">testCellByColumn</option>
                    </select>
                </div>
            </form>
            <h2 id="test">{JSON.stringify(test(this.state.value))}</h2>
            </div>
        );
    }
}