//libraries:
import { HashRouter as Router, Routes, Route } from "react-router-dom";

//styles:
import "./App.css";
import Header from "./components/Navigation/Header";
import MainPage from "./pages/MainPage";

//components:
import MemberList from "./pages/Memberlist";
import PokeAPI from "./pages/PokeAPI";

function App() {
  return (
    <Router>
      <Header />
      <div className="grid gap-24">
        <h1 className="text-9xl">Javascript .map</h1>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/memberlist" element={<MemberList />} />
          <Route path="/pokeapi" element={<PokeAPI />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
