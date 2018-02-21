import BW_TableManager from './BW_TableManager'
export default function test(s) {
    var a = {};
    var t1 = {};
    console.log(s);
    switch(s){
        case 'testTableManager':
            console.log(1);
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
        default:
            console.log("default case");
    }
    return a;
}