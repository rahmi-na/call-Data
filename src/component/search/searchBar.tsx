import React from "react";
import { Input } from "@chakra-ui/react";

type Props = {
  submit: (e: React.FormEvent<HTMLFormElement>) => void;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ submit, change }: Props) => {
  return (
    <form onSubmit={submit}>
      <div className="ml-2 mr-2">
        <div className="p-2">
          <Input
            type="text"
            bg="white"
            className="mb-2 mr-2"
            placeholder="Search for artist or songs"
            width={{ base: "100%", sm: "50%", md: "30%" }}
            data-testid="search-input"
            onChange={change}
          />
          <button
            className="mb-1 text-white btn btn-search"
            data-testid="search-button"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
