import BW_TableManager from './BW_TableManager'
export default function test(s) {
    var a = {};
    
    switch(s){
        case 'testTableManager':
            var tm = new BW_TableManager()
            tm.add (123,"samyak","notsure",0,0,0,0,123,0,0,0,0,0)
            a = tm.get(123)
            break;
        case 'testcolumns':
            var tmc = new BW_TableManager();
            tmc.add (123,"samyak","notsure",0,0,0,0,123,0,0,0,0,0)
            var t1 = tmc.get(123)
            t1.addcolumn(456, "samyak1",t1.id,0,0)
            a = t1.getcolumn(456)
            break;
        default:
            console.log("default case");
    }
    return a;
}