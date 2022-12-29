
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import AddMovie from "./components/pages/AddMovie";
import AllMovies from "./components/pages/AllMovies";
import Favorites from "./components/pages/Favorites";
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>
    <MainNavigation/>
    <Routes>
          <Route path="/" element={<AllMovies/>}/>
          <Route path="/addMovie" element={<AddMovie/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
    </Routes>
    </div>
  );
}

export default App;
