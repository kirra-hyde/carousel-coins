import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

it("doesn't crash", function() {
  render(<Card caption="test caption" src="test1.com" currNum="1" totalNum="3"/>);
});

it("matches snapshot", function() {
  const { container } = render
    (<Card caption="test caption" src="test1.com" currNum="1" totalNum="3"/>);

  expect(container).toMatchSnapshot();
});