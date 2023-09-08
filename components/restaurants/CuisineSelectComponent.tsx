"use client";
import { TagOption } from "@/app/(restaurtants)/(routes)/create/page";
import React from "react";
import { FieldError } from "react-hook-form";

import Select from "react-select";
import makeAnimated from "react-select/animated";

interface IProps {
  error: FieldError | undefined;
  tagOptions: readonly TagOption[];
  isLoading: boolean;
  onChange: (...event: any[]) => void;
  value: any;
}

const CuisineSelectComponent = ({
  error,
  tagOptions,
  isLoading,
  onChange,
  value,
}: IProps) => {
  const animatedComponents = makeAnimated();
  return (
    <div>
      <Select
        name="tags"
        className="my-react-select-container"
        classNamePrefix="my-react-select"
        styles={{
          control: (base) => ({
            ...base,
            boxShadow: "none",
          }),
        }}
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        placeholder="Add some tags to describe the cuisine"
        options={tagOptions}
        isLoading={isLoading}
        value={tagOptions.filter((el) => value?.includes(el.value))}
        onChange={(tag: TagOption[] | null) => {
          if (tag === null) {
            onChange(null);
            return;
          }
          onChange(tag.map((el) => el.value));
        }}
      />
      {error && (
        <div style={{ color: "hsl(0,62.8%,30.6%)" }}>
          Please select a Cuisine
        </div>
      )}
    </div>
  );
};

export default CuisineSelectComponent;
