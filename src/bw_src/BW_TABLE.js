import {Component} from 'react';
import BW_COLUMN from './BW_COLUMN';
import BW_ROW from './BW_ROW';
var tablejson = require('../database/table.json');
var fs = require('fs');
export default class BW_TABLE extends Component {

    constructor() {
        super();
        this.id = 0;
        this.name ="";
        this.bw_wb_id=0;
        this.friend_access=0;
        this.is_active=0;
        this.is_locked=0;
        this.lock_tx_id=0;
        this.nh_id=0;
        this.peer_access=0;
        this.private_access=0;
        this.purpose="";
        this.sequencce_number=0;
        this.tx_id=0;
        this.view_preference_type=0;
        this.column=new Map();
        this.row=new Map();
    }

    set (id,name,purpose,bw_wb_id,peer_access,private_access,friend_access,sequencce_number,tx_id,nh_id,is_active,view_preference_type,is_locked,lock_tx_id){
        this.id =id;
        this.name=name;
        this.purpose=purpose;
        this.bw_wb_id=bw_wb_id;
        this.peer_access=peer_access;
        this.private_access=private_access;
        this.friend_access=friend_access;
        this.sequencce_number=sequencce_number;
        this.tx_id=tx_id;
        this.nh_id=nh_id;
        this.is_active=is_active;
        this.is_locked=is_locked;
        this.view_preference_type=view_preference_type;
        this.lock_tx_id=lock_tx_id;
    }
    addcolumn(id,name,bw_tbl_id,columntype,sequence_no,tx_id,default_string_value,default_float_value,default_integer_value,default_tbl_value,lookup_tbl_id,lookup_column_id,is_enumerated,width,is_active,source,attr) {
        var c = new BW_COLUMN();
        c.set(id,name,bw_tbl_id,columntype,sequence_no,tx_id,default_string_value,default_float_value,default_integer_value,default_tbl_value,lookup_tbl_id,lookup_column_id,is_enumerated,width,is_active,source,attr);
        this.column.set(id,c)
    }
    getcolumn(id){
        return this.column.get(id)
    }

    addrow(id,name,bw_tbl_id,tx_id,sequence_no,is_active,owner_id,owner_tid){
        var r = new BW_ROW();
        r.set(id,name,bw_tbl_id,tx_id,sequence_no,is_active,owner_id,owner_tid);
        this.row.set(id,r)
    }
    getrow(id){
        return this.row.get(id)
    }

    gettable(id){
        tablejson['1002'] = ["1001", "", "10001", true, true, true, "1", "2", "", "", "", "3", "4", ""];
        console.log('gettable invoked');
        console.log(fs);
        //fs.writeFileSync('../database/table.json', JSON.stringify(tablejson));
        fs.writeFileSync('../database/test123.json', JSON.stringify(tablejson));
        
        return tablejson[id];
    }
}

