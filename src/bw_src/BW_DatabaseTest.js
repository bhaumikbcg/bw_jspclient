import BW_ROW from './BW_ROW'
import BW_TABLE from './BW_TABLE'

export function dbtest(){
    var row = new BW_ROW();
    return row.getrow(1);
}

export function tabletest(){
    var table = new BW_TABLE();
    return table.gettable(1001);
}