import Home from "./components/Home/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar.jsx";

function App() {
  return (
    <Router>
      <TopBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
  );
}

export default App;
