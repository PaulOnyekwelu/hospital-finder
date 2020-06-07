import React from "react";
import { FormControl, TextField, Box } from "@material-ui/core";
import PlacesAutocomplete from "react-places-autocomplete";

const customStyle = {
  formSection: {
    display: "flex",
    width: "inherit",
    margin: "0 auto",
    justifyContent: "space-around",
    color: "white",
    position: "relative",
  },
  formElement: {
    margin: "2rem",
    width: "50%",
    color: "inherit",
  },
  dropDown: {
    background: "white",
    color: "black",
    zIndex: 10,
    padding: "1rem",
  },
};

const SearchField = (props: any): JSX.Element => {
  return (
    <FormControl style={customStyle.formElement} className="formItem">
      <PlacesAutocomplete
        value={props.address}
        onChange={props.handleChange}
        onSelect={props.handleSelect}
        searchOptions={props.searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <TextField
              label="Enter Location"
              {...getInputProps({ className: "location-search-input" })}
            />
            <Box
              className="autocomplete-dropdown-container"
              position="absolute"
              style={customStyle.dropDown}
            >
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style:{ padding: '10px'},
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </Box>
          </div>
        )}
      </PlacesAutocomplete>
    </FormControl>
  );
};

export default SearchField;
