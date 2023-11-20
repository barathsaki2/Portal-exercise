import React from 'react'

export default function Parent() {
  return (
    <div>Parent
        <Child name="BARATH"></Child>
      
    </div>
  )
}
function Child(props){
    return(
        <div>
            <h1>My Name is {props.name}</h1>
        </div>
    )
}
