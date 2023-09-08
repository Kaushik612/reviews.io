"use client";
import React, { ChangeEventHandler, useEffect, useState } from "react";
import { useDebounce } from "@/app/hooks/use-debounce";
import { useRouter, useSearchParams } from "next/navigation";

import qs from "query-string";

const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  const [value, setValue] = useState(name || "");
  const debouncedValue = useDebounce<string>(value, 500);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const query = {
      name: debouncedValue,
    };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query: query,
      },
      { skipNull: true, skipEmptyString: true }
    );
    router.push(url);
  });
  return (
    <div className="relative flex items-center w-[50%] flex-grow p-2 rounded-lg focus-within:shadow-lg overflow-hidden bg-component mt-10">
      <div className="grid place-items-center h-full w-12 text-gray-300">
        <button className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <input
        className="w-full outline-none text-sm bg-component text-gray-800
        dark:text-white pr- placeholder:text-gray-500"
        type="text"
        id="search"
        placeholder="Search by Restaurant..."
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Search;
