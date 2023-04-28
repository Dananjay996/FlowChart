import React from "react";

function Detail({ data, onClose, onUpdate }) {
  return (
    <div className=" opacity-0 animate-fade  fixed top-0 left-0 w-full h-full  bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ease-in-out">
      <div className="bg-white p-4 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-2">{data.DisplayName}</h2>
        <p className="text-gray-600 mb-4">{data.description}</p>
        <div className="flex items-center justify-end gap-2">
          <button
            id="closePopupBtn"
            className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition duration-300 ease-in-out"
            onClick={onUpdate}
          >
            Update
          </button>
          <button
            id="closePopupBtn"
            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300 ease-in-out"
            onClick={onClose}
          >
            Delete
          </button>
          <button
            id="closePopupBtn"
            className="bg-gray-500 text-white px-3 py-1 rounded-md hover:bg-gray-600 transition duration-300 ease-in-out"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
