import {Component} from 'react'
import BW_CELL from './BW_CELL'
export default class BW_CellManager extends Component{
    constructor(){
        super()
        this.cellArray = []
        this.rowCell = new Map()
        this.columnCell = new Map()
        this.cell = new Map()
    }

    add(id, bw_row_id, bw_column_id, cell_type, bw_stringvalue_id, integer_value_id, double_value_id, string_value, integer_value, double_value, formula, table_value, tx_id, design_string_value, design_integer_value, design_double_value, design_tx_id, table_value_id, design_tbl_value, active){
        var c = new BW_CELL()
        c.set(id, bw_row_id, bw_column_id, cell_type, bw_stringvalue_id, integer_value_id, double_value_id, string_value, integer_value, double_value, formula, table_value, tx_id, design_string_value, design_integer_value, design_double_value, design_tx_id, table_value_id, design_tbl_value, active)

        this.cell.set(id, c)
        this.cellArray.push(id)
        this.rowCell.set(bw_row_id, this.cellArray)
        this.columnCell.set(bw_column_id, this.cellArray)
    }

    getCellByRow(bw_row_id){
        return this.rowCell.get(bw_row_id)
    }

    getCellByColumn(bw_column_id){
        return this.columnCell.get(bw_column_id)
    }

    getCellById(id){
        return this.cell.get(id)
    }
}