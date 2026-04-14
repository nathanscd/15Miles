import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Init from "./pages/Init";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Init />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
