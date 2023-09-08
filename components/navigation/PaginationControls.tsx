"use client";
import React from "react";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

type PaginationProps = {
  page: number;
  totalPages: number;
  hasPrev: boolean;
  hasNext: boolean;
};

const PaginationControls = ({
  page,
  totalPages,
  hasPrev,
  hasNext,
}: PaginationProps) => {
  const router = useRouter();
  return (
    <div className="flex flex-1 items-center justify-center mb-10">
      <Button
        disabled={!hasPrev}
        className="rounded-md text-lg font-bold py-2 px-2 mr-2 flex items-center justify-center"
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        <svg
          className="h-5 w-5 mr-2 fill-current"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="-49 141 512 512"
        >
          <path
            id="XMLID_10_"
            d="M438,372H36.355l72.822-72.822c9.763-9.763,9.763-25.592,0-35.355c-9.763-9.764-25.593-9.762-35.355,0 l-115.5,115.5C-46.366,384.01-49,390.369-49,397s2.634,12.989,7.322,17.678l115.5,115.5c9.763,9.762,25.593,9.763,35.355,0 c9.763-9.763,9.763-25.592,0-35.355L36.355,422H438c13.808,0,25-11.193,25-25S451.808,372,438,372z"
          ></path>
        </svg>
        Previous
      </Button>
      {Array(totalPages)
        .fill(0)
        .map((_, i) => (
          <Button
            key={i}
            variant={"default"}
            onClick={() => router.push(`?page=${i + 1}`)}
            className="px-4 py-2 mx-1  transition-colors duration-300 transform  rounded-md sm:inline"
          >
            {i + 1}
          </Button>
        ))}

      <Button
        variant={"default"}
        disabled={!hasNext}
        className="rounded-md text-lg font-bold py-2 px-2 ml-2 flex items-center justify-center"
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
        <svg
          className="h-5 w-5 ml-2 fill-current"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="-49 141 512 512"
        >
          <path
            id="XMLID_11_"
            d="M-24,422h401.645l-72.822,72.822c-9.763,9.763-9.763,25.592,0,35.355c9.763,9.764,25.593,9.762,35.355,0
            l115.5-115.5C460.366,409.989,463,403.63,463,397s-2.634-12.989-7.322-17.678l-115.5-115.5c-9.763-9.762-25.593-9.763-35.355,0
            c-9.763,9.763-9.763,25.592,0,35.355l72.822,72.822H-24c-13.808,0-25,11.193-25,25S-37.808,422-24,422z"
          />
        </svg>
      </Button>
    </div>
    // <div className="flex">
    //   <a
    //     href="#"
    //     className="px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-not-allowed dark:bg-gray-800 dark:text-gray-600"
    //   >
    //     <div className="flex items-center -mx-1">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         className="w-6 h-6 mx-1 rtl:-scale-x-100"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //       >
    //         <path
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //           stroke-width="2"
    //           d="M7 16l-4-4m0 0l4-4m-4 4h18"
    //         />
    //       </svg>

    //       <span className="mx-1">previous</span>
    //     </div>
    //   </a>

    //   <a
    //     href="#"
    //     className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
    //   >
    //     1
    //   </a>

    //   <a
    //     href="#"
    //     className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
    //   >
    //     2
    //   </a>

    //   <a
    //     href="#"
    //     className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
    //   >
    //     3
    //   </a>

    //   <a
    //     href="#"
    //     className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
    //   >
    //     4
    //   </a>

    //   <a
    //     href="#"
    //     className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
    //   >
    //     5
    //   </a>

    //   <a
    //     href="#"
    //     className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
    //   >
    //     <div className="flex items-center -mx-1">
    //       <span className="mx-1">Next</span>

    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         className="w-6 h-6 mx-1 rtl:-scale-x-100"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //       >
    //         <path
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //           stroke-width="2"
    //           d="M17 8l4 4m0 0l-4 4m4-4H3"
    //         />
    //       </svg>
    //     </div>
    //   </a>
    // </div>
  );
};

export default PaginationControls;
