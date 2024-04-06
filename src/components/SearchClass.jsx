import React from "react";
import Card from "./Card";

function SearchClass() {
  return (
    <div className="flex flex-col gap-9 items-center mt-16">
      <div className="border-2 rounded-lg p-3 w-2/3">
        <input
          type="text"
          placeholder="Search Class..."
          className="outline-none w-full"
        />
      </div>
      <div className="flex flex-wrap gap-5 items-center justify-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default SearchClass;
