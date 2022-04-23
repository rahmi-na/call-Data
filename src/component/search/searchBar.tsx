import React from "react";
import { Button, Input } from "@chakra-ui/react";

type Props = {
  submit: (e: React.FormEvent<HTMLFormElement>) => void;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ submit, change }: Props) => {
  return (
    <form onSubmit={submit}>
      <div className="ml-2 mr-2">
        <div className="p-2">
          <button className="btn-search ml-1"></button>
          <Input
            type="text"
            bg="white"
            placeholder="Search for artist or songs"
            width={{ base: "100%", sm: "50%", md: "30%" }}
            data-testid="search-input"
            onChange={change}
          />
          <Button
            bg="#1ed760"
            color="white"
            className="mb-1 ml-2"
            _hover={{ bg: "#1ed760" }}
            _active={{ bg: "#1ed760" }}
            data-testid="search-button"
          >
            Search
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
