import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

interface TagOption {
  readonly value: string;
  readonly label: string;
}

interface TagProps {
  value: string[];
  onChange: () => void;
  disabled?: boolean;
}

const tags: readonly TagOption[] = [
  { value: "thai", label: "Thai" },
  { value: "asian", label: "Asian" },
  { value: "american", label: "American" },
  { value: "indian", label: "Indian" },
  { value: "korean", label: "Korean" },
  { value: "glutenfriendly", label: "Gluten-Friendly" },
  { value: "vegan", label: "Vegan" },
  { value: "vegetarian", label: "Vegetarian" },
  { value: "italian", label: "Italian" },
  { value: "japanese", label: "Japanese" },
  { value: "vietnamese", label: "Vietnamese" },
  { value: "sportsbar", label: "Sports Bar" },
  { value: "pub", label: "Pub" },
];

const animatedComponents = makeAnimated();

function Tags({ disabled, value, onChange }: TagProps) {
  return (
    <Select
      isDisabled={disabled}
      className="my-react-select-container"
      classNamePrefix="my-react-select"
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      placeholder="Add some tags to describe the cuisine"
      options={tags}
      onChange={onChange}
    />
  );
}

export default Tags;
