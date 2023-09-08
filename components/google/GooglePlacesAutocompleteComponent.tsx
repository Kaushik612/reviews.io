"use client";
import React from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { FieldError, Ref } from "react-hook-form";

interface IProps {
  error: FieldError | undefined;
}

const GooglePlacesAutocompleteComponent = ({ error, ...field }: IProps) => {
  return (
    <div>
      <GooglePlacesAutocomplete
        selectProps={{
          ...field,
          isClearable: true,
        }}
        debounce={300}
      />
      {error && (
        <div style={{ color: "hsl(0,62.8%,30.6%)" }}>
          Please enter a location
        </div>
      )}
    </div>
  );
};

export default GooglePlacesAutocompleteComponent;
