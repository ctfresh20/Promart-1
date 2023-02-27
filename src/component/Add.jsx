import React from 'react'
import { useState } from 'react';
import * as Icons from "react-icons/fi";

export default function Add() {

    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
    }
    function decrease() {
        if (count <=0) {
           
            setCount (0);
        }
        else {
            setCount(count - 1)
        }
    }


    return (
        <div className='addbtn' style={{border:"1px solid black",borderRadius:"3px",width:"60%",marginLeft:"18%"}}>
            <button style={{ width: "auto",backgroundColor:'transparent',border:"1px solid transparent",color:"black",padding:"3px 10px" }} onClick={decrease}><Icons.FiMinus/></button>
            <button style={{ width: "auto",borderRight:"1px solid black",borderLeft:"1px solid black",backgroundColor:'transparent',border:"1px solid transparent",color:"black",padding:"3px 10px" }}>{count}</button>
            <button style={{ width: "auto",backgroundColor:'transparent',border:"0px",color:"black",padding:"3px 10px" }} onClick={increase}><Icons.FiPlus/></button>

        </div>
    )
}
