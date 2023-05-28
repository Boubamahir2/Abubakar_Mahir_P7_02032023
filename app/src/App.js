import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Lodging from "./pages/Lodging";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";
import apparts from "./assets/datas/appartements.json"
import dataAbout from "./assets/datas/aboutData.json"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home apparts={apparts} />} />
        <Route path="/home" element={<Home apparts={apparts} />} />
        <Route path="/about" element={<About dataAbout={dataAbout} />} />
        <Route
          path="/lodging/:id"
          element={<Lodging apparts={apparts} />}
        />
        <Route path="/error" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
