import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [Notes,setNotes]=useState([]);

  function del(id){
    console.log("Delete was created");
    setNotes( prevvalue=>{
      return Notes.filter( (item,index) =>{
        return index !== id
      })
    })
  }


  

  function getNote(note){
    setNotes( prevnotes=> {
      return [...prevnotes,note]
    })

  }

  return (
    <div>
      <Header />
      <CreateArea getNote={getNote} />
      {Notes.map( (item,index) =>{
        return <Note  key={index} id={index} title={item.title} content={item.content} del={del}/>
      })}
      <Footer />
    </div>
  );
}

export default App;
