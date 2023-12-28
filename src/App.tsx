import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import EventDetails from "./pages/EventDetails";
import Home from "./pages/Home";
import EventInformation from "./pages/EventInformation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events/:eventId" element={<EventDetails />} />
        <Route path="/bookmakers/:eventId" element={<EventInformation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
