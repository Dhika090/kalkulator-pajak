import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Header from "./pages/home";
import Pph21 from "./pages/pph21";
import Pph23 from "./pages/pph23";
import Pph4 from "./pages/pph4(2)";
import PPN from "./pages/ppn";

function App() {
  //   return <PPh21Calculator />;
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Pph21 />} />
          <Route path="/pph21" element={<Pph21 />} />
          <Route path="/pph23" element={<Pph23 />} />
          <Route path="/pph4" element={<Pph4 />} />
          <Route path="/ppn" element={<PPN />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
