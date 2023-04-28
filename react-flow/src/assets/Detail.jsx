import React from "react";

function Detail({ data, onClose }) {
  return (
    <div className=" bg-blue-500 opacity-0 animate-fade  fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ease-in-out">
      <div className="bg-white p-4 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-2">{data.DisplayName}</h2>
        <p className="text-gray-600 mb-4">{data.description}</p>
        <button
          id="closePopupBtn"
                  className="bg-gray-500 text-white px-3 py-1 rounded-md hover:bg-gray-600 transition duration-300 ease-in-out"
                  onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Detail;
