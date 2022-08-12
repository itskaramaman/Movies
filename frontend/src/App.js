import { Routes, Route } from "react-router-dom";

import AllMovies from "./components/AllMovies";
import Favourites from "./components/Favourites";
import Header from "./layout/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<AllMovies />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </>
  );
}

export default App;
