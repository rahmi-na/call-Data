import React from "react";
import { render } from "@testing-library/react";
import data from "../../data/allData";
import List from "./list";

it("Success rendered", async () => {
  const setSelect = jest.fn();
  render(
    <List
      key={data.id}
      title={data.name}
      artists={data.artists[0].name}
      image={data.album.images[0].url}
      buttonSelect={setSelect}
      select={true}
    />
  );
});
