import React from "react"

export default function Card(props){
    console.log(props)
    return(
        <>
        <div className="Notes--Container">
            <h1 className="Title">
                {props.title}
            </h1>
            <p className="Text" >
                {props.text}
            </p>
        </div>
        </>
    )
}