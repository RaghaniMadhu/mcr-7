import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TripAdvisorContext } from "../contexts/TripAdvisorContext";
import Card from "../components/Card";

function CountriesPage() {
  const { continentId } = useParams();
  const { continentsData } = useContext(TripAdvisorContext);

  const ourContinent = continentsData.find(
    ({ id }) => id.toString() === continentId
  );
  const ourContinentCountries = ourContinent.countries;

  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-align-center">
        Top Countries in {ourContinent.name} for your next Holiday
      </h1>
      <div className="flex-row-center flex-wrap gap-2">
        {ourContinentCountries.map((eachCountry) => (
          <Card
            key={eachCountry.id}
            requiredData={eachCountry}
            onClick={() => {
              navigate("/destinations/" + continentId + "/" + eachCountry.id);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default CountriesPage;
