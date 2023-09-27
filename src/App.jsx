import React from "react";
import { DetailBar, QuizScreen, Sidebar } from "./components";
// import { Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-[#F5F6F7] flex gap-10  w-full ">
        <Sidebar />

        <QuizScreen />

        <DetailBar />

        {/* This Router will be used to navigate through different pages of the app using sidebar */}
        {/* <Router>
          <Routes>
            <Route path='/quiz' element={<QuizScreen />}/>
          </Routes>
        </Router> */}
    </div>
  );
}

export default App;
