import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContinentsPage from "./pages/ContinentsPage";
import CountriesPage from "./pages/CountriesPage";
import DestinationsPage from "./pages/DestinationsPage";
import EachDestinationPage from "./pages/EachDestinationPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ContinentsPage />} />
        <Route path="/countries/:continentId" element={<CountriesPage />} />
        <Route
          path="/destinations/:continentId/:countryId"
          element={<DestinationsPage />}
        />
        <Route
          path="/destinations/:continentId/:countryId/:destinationId"
          element={<EachDestinationPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
