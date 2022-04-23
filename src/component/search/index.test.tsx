import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "./searchBar";

const onSubmit = jest.fn();
const onChange = jest.fn();

const App = () => render(<SearchBar submit={onSubmit} change={onChange} />);

describe("Testing", () => {
  beforeEach(App);
  test("Testing Render", () => {
    const searchInput = screen.getByTestId("search-input");
    const button = screen.getByTestId("search-button");
    expect(searchInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  test("Testing Type", () => {
    const searchInput = screen.getByTestId("search-input");
    userEvent.type(searchInput, "Hindia");

    expect(searchInput).toHaveValue("Hindia");
  });
  test("Testing Button", () => {
    const button = screen.getByTestId("search-button");
    expect(button).not.toBeDisabled();
  });
});
