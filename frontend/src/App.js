//moduls
import "./styles/App.css";
import React from "react";
import { Routes, Route} from "react-router-dom";
//tech pages
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Layout from "./pages/layout";
//ecosystem
import EcosystemTest from "./pages/EcosystemTest";
import Ecosystem from "./pages/Ecosystem";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="ecosystemtest" element={<EcosystemTest />} />
          <Route path="ecosystem" element={<Ecosystem/>}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
