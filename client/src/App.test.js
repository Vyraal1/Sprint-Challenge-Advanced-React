import React from "react";
import * as rtl from "@testing-library/react";
import App from "./App";

// afterEach(rtl.cleanup);

it("renders without crashing", () => {
  rtl.render(<App />);
});

// console.log(wrapper.debug());
