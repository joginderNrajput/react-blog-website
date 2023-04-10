import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, totalPages, handlePageChange } = useContext(AppContext);
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <div className="flex items-center rounded-md shadow-sm shadow-black my-3">
        {page > 1 && (
          <button
            onClick={() => handlePageChange(page - 1)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-l"
          >
            Prev
          </button>
        )}

        <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4">
          {page}
        </button>

        {page < totalPages && (
          <button
            onClick={() => handlePageChange(page + 1)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-r"
          >
            Next
          </button>
        )}
      </div>
      <p className="ml-4 text-gray-700 font-bold">
        Page {page} of {totalPages}
      </p>
    </div>
  );
};

export default Pagination;
