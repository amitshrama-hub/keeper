import React from "react";

const Note = (props) => {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button className="note_btn" onClick={handleClick}>
        Delete
      </button>
    </div>
  );
};

export default Note;
