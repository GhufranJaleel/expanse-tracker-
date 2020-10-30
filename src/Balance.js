import React ,{useContext}from 'react'
import {GlobalContext} from './GlobalState'

function Balance(){
    const {transactions}=useContext(GlobalContext);  //use context hook
    const amounts=transactions.map(transactions=>(transactions.amount));
    const total=amounts.reduce((acc,item)=>(acc +=item),0).toFixed(2);
    return(
        
        <div className="blance">
        <h4>
        Your Balance
        </h4>
    <h1>${total}</h1>
        </div>


    );
}
export default Balance;
