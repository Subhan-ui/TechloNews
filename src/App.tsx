import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./template/Layout";

import Hero from "./pages/Hero";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <Layout>
        <div className="bg-[#F1F2F3] overflow-y-hidden">
          <div className="relative 3xl:w-[1366px] w-full mx-auto overflow-x-hidden">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </div>
        </div>
      </Layout>
    </Router>
  );
}

export default App;
