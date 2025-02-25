/* eslint-disable react/prop-types */
import Btn from "./Btn";
import { useState } from "react";

export default function FormSplitBill({ friend }){
    const [billOn, setBillOn] = useState(true)
    const [expense, setExpense] = useState(0)
    const [billValue, setBillValue] = useState(0);
    const [myExpense, setMyExpense] =useState(0)

    return(
        <form className="form-split-bill">
            <h2 className="title"> Split Bill with {friend.name}</h2>
        
            <label>Bill value:</label>
            <input type="number" value={billValue} onChange={(e)=>{
                setBillValue(e.target.value);
                const val= e.target.value - myExpense;
                setExpense(val);
            }} />

            <label>Your Expense:</label>
            <input type="number" value={myExpense} onChange={(e)=>{
                setMyExpense(e.target.value);
                const val= billValue - e.target.value;
                setExpense(val);
            }} />

            <label>{friend.name}&apos;s expense:</label>
            <input type="text" disabled={true} value={billValue!=0?expense:""}/>

            <label>Who is paying the bill?</label>
            <select onChange={(e)=>{
                setBillOn(e.target.value)
            }}>
                <option value={true} selected={billOn}>Me</option>
                <option value={false}>{friend.name}</option>
            </select>

            <Btn>Split Bill</Btn>
        </form>
    )
}