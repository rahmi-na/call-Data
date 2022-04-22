import React from "react";
import { render } from "@testing-library/react";
import List from "./list";
import data from "../../data/one-data";
// comment
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
