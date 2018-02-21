import {Component} from 'react'
export default class BW_CELL extends Component{
    constructor(){
        super()
        this.id = 0
        this.bw_row_id = 0
        this.bw_column_id = 0
        this.cell_type = ""
        this.bw_stringvalue_id = 0
        this.integer_value_id = 0
        this.double_value_id = 0
        this.string_value = ""
        this.integer_value = 0
        this.double_value = 0
        this.formula = ""
        this.table_value = 0
        this.tx_id = 0
        this.design_string_value = ""
        this.design_integer_value = 0
        this.design_double_value = 0
        this.design_tx_id = 0
        this.table_value_id = 0
        this.design_tbl_value = 0
        this.active = false
    }

    set(id, bw_row_id, bw_column_id, cell_type, bw_stringvalue_id, integer_value_id, double_value_id, string_value, integer_value, double_value, formula, table_value, tx_id, design_string_value, design_integer_value, design_double_value, design_tx_id, table_value_id, design_tbl_value, active){
        this.id = id
        this.bw_row_id = bw_row_id
        this.bw_column_id = bw_column_id
        this.cell_type = cell_type
        this.bw_stringvalue_id = bw_stringvalue_id
        this.integer_value_id = integer_value_id
        this.double_value_id = double_value_id
        this.string_value = string_value
        this.integer_value = integer_value
        this.double_value = double_value
        this.formula = formula
        this.table_value = table_value
        this.tx_id = tx_id
        this.design_string_value = design_string_value
        this.design_integer_value = design_integer_value
        this.design_double_value = design_double_value
        this.design_tx_id = design_tx_id
        this.table_value_id = table_value_id
        this.design_tbl_value = design_tbl_value
        this.active = active
    }

}