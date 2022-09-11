import { usePagination, DOTS } from "hooks/usePagination";
import React from "react";

const PaginationTwo = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }
  const onNext = () => {
    onPageChange(currentPage + 1);
  };
  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };
  let lastPage = paginationRange?.[paginationRange?.length - 1];
  return (
    <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
      <div className="flex items-center">
        <button
          type="button"
          onClick={() => {
            currentPage !== 1 && onPrevious();
          }}
          className={`w-full p-4 border-t border-b border-l text-base rounded-l-xl text-gray-600 bg-white ${
            currentPage === 1 && "cursor-not-allowed"
          }
          ${currentPage !== 1 && "hover:bg-gray-100"}`}
        >
          <svg
            width="9"
            fill="currentColor"
            height="8"
            className=""
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
          </svg>
        </button>

        {paginationRange?.map((pageNumber) => {
          return (
            <button
              type="button"
              disabled={pageNumber === currentPage}
              onClick={() => onPageChange(pageNumber)}
              className={`w-full px-4 py-2 border-t border-b text-base ${
                pageNumber === currentPage
                  ? "text-gray-600 font-mono font-bold"
                  : "text-indigo-500"
              } bg-white hover:bg-gray-100`}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          type="button"
          onClick={() => {
            currentPage !== lastPage && onNext();
          }}
          className={`w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white ${
            currentPage === lastPage && "cursor-not-allowed"
          }
            ${currentPage !== lastPage && "hover:bg-gray-100"}`}
        >
          <svg
            width="9"
            fill="currentColor"
            height="8"
            className=""
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PaginationTwo;
