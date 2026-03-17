import { BrowserRouter, Route, Routes } from "react-router";
import DefaultTemplate from "./templates/DefaultTemplate";
import Homepage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultTemplate}>
          <Route index Component={Homepage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
