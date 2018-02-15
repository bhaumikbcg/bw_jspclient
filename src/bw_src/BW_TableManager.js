import {Component} from 'react';
import BW_TABLE from "./BW_TABLE";
export default class BW_TableManager extends Component {
    constructor(){
        super();
        this.List = new Map();
    }
    
    add(id,name,purpose,bw_wb_id,peer_access,private_access,friend_access,sequencce_number,tx_id,nh_id,is_active,view_preference_type,is_locked,lock_tx_id){
        var t = new BW_TABLE();
        t.set(id,name,purpose,bw_wb_id,peer_access,private_access,friend_access,sequencce_number,tx_id,nh_id,is_active,view_preference_type,is_locked,lock_tx_id)
        this.List.set(id,t)

    }

    get(id){
        return this.List.get(id);
    }
}
// Test
//var a = new BW_TableManager();
//a.add(123,"samyak","notsuren",0,0,0,0,123,0,0,0,0,0);
//var info = a.get(123);
//console.log(info);