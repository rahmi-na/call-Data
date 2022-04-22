import React from "react";
import { Input } from "@chakra-ui/react";

const SearchBar = ({ submit, change }) => {
  return (
    <form onSubmit={submit}>
      <div className="ml-2 mr-2">
        <div className="p-2">
          <button className="btn-search ml-1"></button>
          <Input
            type="text"
            placeholder="Search for artist or songs"
            bg="white"
            width={{ base: "100%", sm: "50%", md: "30%" }}
            onChange={change}
          />
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
