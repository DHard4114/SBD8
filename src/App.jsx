import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import OS from "./pages/OS";
import SBD from "./pages/SBD";
import DMJ from "./pages/DMJ";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/os" element={<OS />} />
            <Route path="/sbd" element={<SBD />} />
            <Route path="/dmj" element={<DMJ />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
