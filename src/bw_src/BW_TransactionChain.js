import {Component} from 'react';
export default class BW_TransactionChain extends Component {
    constructor(){
        super();
        this.sourceTransactionId = 0;
        this.targetTransactionId = 0;
    }

    set(sourceTransactionId, targetTransactionId){
        this.sourceTransactionId = sourceTransactionId;
        this.targetTransactionId = targetTransactionId;
    }
}