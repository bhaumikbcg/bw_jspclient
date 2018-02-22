import {Component} from 'react'
import BW_CELL from './BW_CELL'
//import Dropdown from '../form_components/Dropdown'
export default class BW_CellManager extends Component{
    constructor(){
        super()
        this.cellArray = []
        this.rowCell = new Map()
        this.columnCell = new Map()
        this.cells = new Map()
    }

    add(id, bw_row_id, bw_column_id, cell_type, bw_stringvalue_id, integer_value_id, double_value_id, string_value, integer_value, double_value, formula, table_value, tx_id, design_string_value, design_integer_value, design_double_value, design_tx_id, table_value_id, design_tbl_value, active){
        var c = new BW_CELL()
        c.set(id, bw_row_id, bw_column_id, cell_type, bw_stringvalue_id, integer_value_id, double_value_id, string_value, integer_value, double_value, formula, table_value, tx_id, design_string_value, design_integer_value, design_double_value, design_tx_id, table_value_id, design_tbl_value, active)

        this.cells.set(id, c)
        this.cellArray.push(id)
        this.rowCell.set(bw_row_id, this.cellArray)
        this.columnCell.set(bw_column_id, this.cellArray)
    }

    getCellByRow(bw_row_id){
        let cellDataArray = []
        //"this" is passed as an argument to forEach since the first argument is a callback function. So every time a call back function is called, "this" will be applied to it, otherwise it will return undefined
        this.rowCell.get(bw_row_id).forEach(function(item){
           cellDataArray.push(this.getCellById(item)) 
        }, this);
        return cellDataArray
    }

    getCellByColumn(bw_column_id){
        let cellDataArray = []
        //But if we use the forEach with the arrow function, then we don't need to explicitly pass "this". "this" is by default included in the arrow function Keeping both the methods here for reference purposes.
        this.columnCell.get(bw_column_id).forEach(item => cellDataArray.push(this.getCellById(item)));
        return cellDataArray
    }

    getCellById(id){
        return this.cells.get(id)
    }
}