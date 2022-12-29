import React from "react";
import { create } from "react-test-renderer";
import MovieList from "../movies/MovieList";

describe("Button component", () => {
  test("Matches the snapshot", () => {
    const button = create(<MovieList />);
    expect(button.toJSON()).toMatchSnapshot();
  });
});