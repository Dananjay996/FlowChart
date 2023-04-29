import React, { useState } from "react";
import DeletePopUp from "./DeletePopUp";

function Detail({ data, onClose, onUpdate, onDelete }) {
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  function handleDeleteChildNodes() {
    setShowDeletePopup(true);
  }

  function handleDeleteConfirm() {
    // delete the child nodes here
    setShowDeletePopup(false);
  }

  function handleDeleteCancel() {
    setShowDeletePopup(false);
  }
  return (
    <>
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
              onClick={() => {
                setShowDeletePopup(true);
              }}
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
      <div>
        <button onClick={handleDeleteChildNodes}>Delete Child Nodes</button>
        {showDeletePopup && (
          <div className="bg-blue-500 opacity-0 animate-fade  fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ease-in-out">
            <DeletePopUp
              onDelete={handleDeleteConfirm}
              onCancel={handleDeleteCancel}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Detail;
