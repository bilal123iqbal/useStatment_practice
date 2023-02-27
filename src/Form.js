import React, { useState } from "react";

const Form = () => {
  const [writeText, setWriteText] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Write Text: ", writeText);

  };

  return (
    <div className="sbmtform">
    <form   onSubmit={handleSubmit}>
          Write Text:
      <input
        type="text"
        
        name="writeText"
        value={writeText}
        onChange={(e) => setWriteText(e.target.value)}
      />

      <button type="submit" className="btn">Submit</button>
    </form>

    </div>
  );
};

export default Form;
