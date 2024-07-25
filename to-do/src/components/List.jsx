import { useState } from "react";


const List = ({ item, index, deleteBtn }) => {
  

  return (
    <div className="flex justify-start p-2 gap-3  ">
      <li className=" bg-red-500 w-[100%] p-2 m-2">{item}</li>
      <button
        className="bg-blue-300 hover:bg-blue-200 cursor-pointer rounded-md p-2 "
        onClick={() => deleteBtn(index)}
      >
        Delete
      </button>
    </div>
  );
};

export default List