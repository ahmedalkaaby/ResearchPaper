import React from "react";
const Input = (props) => {
  return (
    <div>
      <input
        onChange={(e) => props.handleChange(e.target.value)}
        type="text"
        placeholder={props.ph}
        size={props.size}
        className="border rounded-lg border-gray-500 my-2 py-4 pr-4"
        required
      ></input>
    </div>
  );
};

export default Input;
