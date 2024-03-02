import React from "react";

export default function Filtered() {
  return (
    <>
      <div className="flex justify-end items-end p-3">
        <div className=" text-xl font-bold">Inbox</div>
      </div>

      <div className="flex justify-end items-end p-3 gap-4 items-center">
        <button className="border-2 rounded  text-gray-500 px-2">All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </>
  );
}
