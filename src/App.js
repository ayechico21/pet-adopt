import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "brand" }, "Adopt me!!!"),
    React.createElement(Pet, {
      name: "dog1",
      animal: "dog",
      breed: "breed1",
    }),
    React.createElement(Pet, {
      name: "dog2",
      animal: "dog",
      breed: "breed2",
    }),
    React.createElement(Pet, {
      name: "cat1",
      animal: "cat",
      breed: "breed1",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
