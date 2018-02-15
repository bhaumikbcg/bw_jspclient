import BW_TableManager from './BW_TableManager'
//import {Component} from 'react';
export default function testTableManager() {
var tm = new BW_TableManager();
tm.add (123,"samyak","notsure",0,0,0,0,123,0,0,0,0,0);
return tm.get(123)
}
export default function testcolumns(){
    var tm = new BW_TableManager();
tm.add (123,"samyak","notsure",0,0,0,0,123,0,0,0,0,0);
    var t1 = tm.get(123);
    t1.addcolumn(456, "samyak1",t1.id,0,0) 
    return t1.getcolumn(456);
}