import BW_TableManager from './BW_TableManager'
import BW_CellManager from './BW_CellManager'
export default function test(s) {
    var a = {};
    var t1 = {};
    console.log(s);
    switch(s){
        case 'testTableManager':
            var tm = new BW_TableManager()
            tm.add (123,"samyak","notsure",0,0,0,0,123,0,0,0,0,0)
            a = tm.get(123)
            break;
        case 'testcolumns':
            tm = new BW_TableManager()
            tm.add (123,"samyak","notsure",0,0,0,0,123,0,0,0,0,0)
            t1 = tm.get(123)
            t1.addcolumn(456, "samyak1",t1.id,0,0)
            a = t1.getcolumn(456)
            break;
        case 'testrows':
            tm = new BW_TableManager()
            tm.add (123,"samyak","notsure",0,0,0,0,123,0,0,0,0,0)
            t1 = tm.get(123)
            t1.addrow(457, "samyak1",t1.id,0,0)
            a = t1.getrow(457)
            break;
        case 'testcells':
            var cm = new BW_CellManager()
            cm.add(111, 222, 333, "hello")
            a = cm.getCellById(111)
            break;
        case 'testCellByRow':
            cm = new BW_CellManager()
            cm.add(111,222,333,"hello")
            cm.add(777,222,333,"hi")
            a = cm.getCellByRow(222)
            break;
        case 'testCellByColumn':
            cm = new BW_CellManager()
            cm.add(444,222,333,"hello")
            cm.add(888,222,333,"hi")
            a = cm.getCellByColumn(333)
            break;
        default:
            console.log("default case");
    }
    return a;
}