import React from "react";
import * as rtl from "@testing-library/react";
import App from "./App";
import PlayerList from "./components/PlayerList";
import PlayerCard from "./components/PlayerCard";

afterEach(rtl.cleanup);

it("renders without crashing", () => {
  rtl.render(<App />);
});

test("Dark Mode makes the screen beautiful", () => {
  const { getByText } = rtl.render(<App />);
  rtl.fireEvent.click(getByText("Dark Mode Toggle"));
});

test("Does correctly render a players country?", () => {
  const playerData = {
    name: "fake person",
    searches: 69,
    id: "fakeMcFake",
    country: "United States"
  };
  const { getByText } = rtl.render(<PlayerCard player={playerData} />);
  expect(getByText(/united states/i));
});

//my tests would be
// 1) does it have render the actual country that it was passed?
// 2) does it just render and show up? (check if the app just renders)
// 3) does the dark mode toggle work? (check if the body has the class after the button is pressed)
