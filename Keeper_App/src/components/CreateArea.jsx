import React, {useState} from "react";

function CreateArea(props) {
  const[note,setNote] =useState({
    title:"",
    content:""
  });

  function handle(event){
    const {name,value}=event.target;

    setNote(prevNote =>{
      return{
        ...prevNote,
        [name]:value

      }
    })
  }

  function click(event){
    props.getNote(note);
    setNote(
      {
        title:"",
        content:""
      }

    )

    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input onChange={handle} value={note.title} name="title" placeholder="Title" />
        <textarea onChange={handle} value={note.content} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={click}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
