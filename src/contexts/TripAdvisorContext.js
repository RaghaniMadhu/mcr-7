import { createContext, useState } from "react";
import { data } from "../db/Data";

export const TripAdvisorContext = createContext();

function TripAdvisorContextProvider({ children }) {
  const [continentsData] = useState(data.continents);

  return (
    <TripAdvisorContext.Provider value={{ continentsData }}>
      {children}
    </TripAdvisorContext.Provider>
  );
}

export default TripAdvisorContextProvider;
