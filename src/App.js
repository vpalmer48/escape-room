import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './pages/HomePage';
import Puzzle1 from './pages/Puzzle1';
import Puzzle2 from './pages/Puzzle2';
import Puzzle3 from './pages/Puzzle3';
import Puzzle4 from './pages/Puzzle4';
import Puzzle5 from './pages/Puzzle5';
import Puzzle6 from './pages/Puzzle6';
import Puzzle7 from './pages/Puzzle7';
import Puzzle8 from './pages/Puzzle8';
import Puzzle9 from './pages/Puzzle9';
import Puzzle10 from './pages/Puzzle10';
import ErrorPage from './pages/ErrorPage';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/escape-room" element={<Home />} />
          <Route path="/puzzle1" element={<Puzzle1 />} />
          <Route path="/puzzle2" element={<Puzzle2 />} />
          <Route path="/puzzle3" element={<Puzzle3 />} />
          <Route path="/puzzle4" element={<Puzzle4 />} />
          <Route path="/puzzle5" element={<Puzzle5 />} />
          <Route path="/puzzle6" element={<Puzzle6 />} />
          <Route path="/puzzle7" element={<Puzzle7 />} />
          <Route path="/puzzle8" element={<Puzzle8 />} />
          <Route path="/puzzle9" element={<Puzzle9 />} />
          <Route path="/puzzle10" element={<Puzzle10 />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;