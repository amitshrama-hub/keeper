import React, { useState } from "react";

const CreateArea = (props) => {
  const [note, SetNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    SetNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    SetNote({ title: "", content: "" });
    event.preventDefault();
  }

  return (
    <div className="input_area">
      <form className="form">
        <input
          className="title"
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <textarea
          className="area"
          name="content"
          value={note.content}
          onChange={handleChange}
          placeholder="Take a note..."
          rows="4"
          required
        />
        <button className="submit_btn" onClick={submitNote}>
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateArea;
