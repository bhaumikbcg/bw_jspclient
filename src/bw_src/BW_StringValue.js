import {Component} from 'react'
export default class BW_StringValue extends Component{
    constructor(){
        super()
        this.cellId = 0
        this.value = {}
        this.tx_id = 0
    }

    set(cellId, value, tx_id){
        this.cellId = cellId
        this.value = value
        this.tx_id = tx_id
    }
}