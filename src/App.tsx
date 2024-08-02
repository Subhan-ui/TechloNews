import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./components/template/Layout";

import Hero from "./pages/hero/Hero";
import Search from "./pages/search/Search";

function App() {
  return (
    <Router>
      <Layout>
        <div className="bg-lightGray overflow-y-hidden">
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
