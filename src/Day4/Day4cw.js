import React, {Component} from 'react'
function Day4cw(props){
    return(
        <>
        my name is {props.name}
        </>
    )
}
export default function List(){
    const list=["mango","orange","apple"];
    return(
        <div>
            {list.map((item)=><Demo name={item}></Demo>)}
        </div>
    )
}