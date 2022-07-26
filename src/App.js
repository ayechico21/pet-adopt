import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
const App = () => {
  return (
    <BrowserRouter>
      <h1>He he he</h1>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById("root"));
