import {Component} from 'react';
export default class BW_ROW extends Component {

    constructor(){
        super();
        this.id = 0;
        this.name="";
        this.bw_tbl_id=0;
        this.columntype=0;
        this.sequence_no=0;
        this.tx_id=0;
        this.default_string_value="";
        this.default_integer_value=0;
        this.default_float_value=0;
        this.default_tbl_value=0;
        this.lookup_tbl_id=0;
        this.lookup_row_id=0;
        this.is_enumerated=0;
        this.width=0;
        this.is_active=0;
        this.source=0;
        this.attr=0;
    }
    set (id,name,bw_tbl_id,columntype,sequence_no,tx_id,default_string_value,default_float_value,default_integer_value,default_tbl_value,lookup_tbl_id,lookup_row_id,is_enumerated,width,is_active,source,attr){
        this.id = id;
        this.name=name;
        this.bw_tbl_id=bw_tbl_id;
        this.columntype=columntype;
        this.sequence_no=sequence_no;
        this.tx_id=tx_id;
        this.default_string_value=default_string_value;
        this.default_integer_value=default_integer_value;
        this.default_float_value=default_float_value;
        this.default_tbl_value=default_tbl_value;
        this.lookup_tbl_id=lookup_tbl_id;
        this.lookup_row_id=lookup_row_id;
        this.is_enumerated=is_enumerated;
        this.width=width;
        this.is_active=is_active;
        this.source=source;
        this.attr=attr;
    }
}