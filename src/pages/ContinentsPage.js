import React, { useContext } from "react";
import { TripAdvisorContext } from "../contexts/TripAdvisorContext";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

function ContinentsPage() {
  const { continentsData } = useContext(TripAdvisorContext);
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-align-center">Welcome To Trip Advisor</h1>
      <h2 className="blue-color text-align-center">
        Top Continents For Your Next Holiday
      </h2>
      <div className="flex-row-center flex-wrap gap-2">
        {continentsData.map((eachContinent) => (
          <Card
            key={eachContinent.id}
            requiredData={eachContinent}
            onClick={() => {
              navigate("/countries/" + eachContinent.id);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ContinentsPage;
