import { BrowserRouter, Route, Routes } from "react-router";
import DefaultTemplate from "./templates/DefaultTemplate";
import MovieListPage from "./pages/movies/MovieListPage";
import MovieDetailPage from "./pages/movies/MovieDetailPage";
import Homepage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultTemplate}>
          <Route index Component={Homepage} />
          
          <Route path="movies">
            <Route index Component={MovieListPage} />
            <Route path=":id" Component={MovieDetailPage} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
