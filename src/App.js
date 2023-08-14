import React from "react"
import { useState } from "react"
import Card from "./Card"

export default function App(){
    const [notesData, setNotesData] = useState([
    ]);

    // New note functions
    const [newTitle, setNewTitle] = useState('')
    const [newText, setNewText] = useState('')

    function titleListner(event){
        setNewTitle(event.target.value)
    }   

    function textListner(event){
        setNewText(event.target.value)
    }   

    function AddNote() {
        if (newTitle && newText){
            setNotesData(prevState => [
                ...prevState,
                {
                    title: newTitle,
                    text: newText
                }
            ]);
            setNewTitle(''); 
            setNewText(''); 
        }
        else {
            alert("Title and text cannot be empty")
        }

    }


    const elements = notesData.map(data => {
        return (
            <Card 
                key={data.title}
                {...data}
            />
        )
    })

    return (
        <>
            <div className="Notes">
                <div className="Input--Container">
                    <input 
                        className="Input--Title" 
                        placeholder="Title"
                        name="Title"
                        value={newTitle}
                        onChange={titleListner}
                    />
                    <input 
                        className="Input--Text"
                        placeholder="Text"
                        name="Title"
                        value={newText}
                        onChange={textListner}
                    />
                    <button
                        onClick={AddNote}
                    > 
                    Add note </button>
                </div>
                {elements}
            </div>
        </>
        
    )
}