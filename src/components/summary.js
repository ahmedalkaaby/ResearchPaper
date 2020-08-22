import React from "react";
const Summary = (props) => {
  return (
    <div>
      <h1 className="mr-1 mt-8 mb-1 text-xl">موجز البحث واهدافه :</h1>
      <textarea
        onChange={(e) => props.handleChange(e.target.value)}
        cols="141"
        rows="8"
        className="border rounded-lg border-gray-500 my-2 py-4 pr-4"
      ></textarea>
    </div>
  );
};

export default Summary;
