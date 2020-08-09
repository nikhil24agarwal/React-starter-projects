import React from "react";

function Note(props) {
  function dclick(){
     props.del(props.id);

  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={dclick}>DELETE</button>
    </div>
  );
}

export default Note;
