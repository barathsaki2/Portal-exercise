import React, { useState } from 'react'
 export default function Functioncom()
 {
    const[college,setCollege]=useState("SKCET")
    return(
        <div>
            <h1>My college is {college}</h1>
            <buttton onClick={()=>setCollege("Atria")}>Touch it</buttton>
        </div>

    )
 }