import {Component} from 'react';
var rowjson = require('../database/row.json');
export default class BW_ROW extends Component {

    constructor(){
        super();
        this.id = 0;
        this.name="";
        this.bw_tbl_id=0;
        this.tx_id=0;
        this.sequence_no=0;
        this.is_active=0;
        this.owner_id = 0;
        this.owner_tid = 0;
        this.row = new Map();
    }
    set (id,name,bw_tbl_id,tx_id,sequence_no,is_active,owner_id,owner_tid){
        this.id = id;
        this.name=name;
        this.bw_tbl_id=bw_tbl_id;
        this.tx_id=tx_id;
        this.sequence_no=sequence_no;
        this.is_active=is_active;
        this.owner_id = owner_id;
        this.owner_tid = owner_tid;
    }

    getrow(id){
        console.log(rowjson[1001][id]);
        return rowjson[1001][id];
        //return "abc";
    }
}