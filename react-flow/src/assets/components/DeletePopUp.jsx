import React from "react";

function DeletePopup({ onDelete, onCancel }) {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <p className="text-gray-600 mb-4">
        Are you sure you want to delete the child nodes?
      </p>
      <div className="flex justify-between">
        <button
          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300 ease-in-out"
          onClick={onDelete}
        >
          Yes
        </button>
        <button
          className="bg-gray-500 text-white px-3 py-1 rounded-md hover:bg-gray-600 transition duration-300 ease-in-out"
          onClick={onCancel}
        >
          No
        </button>
      </div>
    </div>
  );
}
export default DeletePopup;
