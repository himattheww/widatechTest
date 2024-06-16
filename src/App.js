import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage/HomePage";
import Register from "./Pages/Register";
import MangaList from "./Pages/Manga/MangaList";
import AnimeList from "./Pages/Anime/AnimeList";
import MangaDetail from "./Pages/Anime/Anime List/Bleach/Bleach";
import Profile from "./Profile/Profile";
import Shopping from "./Pages/Shopping/Shopping";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" name="Login Page" element={<LoginPage />} />
          <Route exact path="/profile" name="Profile" element={<Profile />} />

          <Route exact path="/home" name="Home Page" element={<HomePage />} />
          <Route
            exact
            path="/register"
            name="Register Page"
            element={<Register />}
          />
          <Route
            exact
            path="/mangalist"
            name="Manga Page"
            element={<MangaList />}
          />
          <Route
            exact
            path="/animelist"
            name="Anime Page"
            element={<AnimeList />}
          />

          <Route
            exact
            path="/shop"
            name="Anime Page"
            element={<Shopping />}
          />
          {/* dibawah ini nantinya untuk detail manga */}
          <Route
            exact
            path="/bleach"
            name="Anime Page"
            element={<MangaDetail />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
