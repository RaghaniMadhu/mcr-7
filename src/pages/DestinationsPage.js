import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TripAdvisorContext } from "../contexts/TripAdvisorContext";
import Card from "../components/Card";

function DestinationsPage() {
  const { continentId, countryId } = useParams();
  const { continentsData } = useContext(TripAdvisorContext);

  const navigate = useNavigate();

  const ourContinentCountries = continentsData.find(
    ({ id }) => id.toString() === continentId
  ).countries;
  const ourCountry = ourContinentCountries.find(
    ({ id }) => id.toString() === countryId
  );
  const ourDestinations = ourCountry.destinations;

  return (
    <div>
      <h1 className="text-align-center">
        Top Destinations in {ourCountry.name} for your next Holiday
      </h1>
      <div className="flex-row-center flex-wrap gap-2">
        {ourDestinations.map((eachDestination) => (
          <Card
            key={eachDestination.id}
            requiredData={eachDestination}
            onClick={() => {
              navigate(
                "/destinations/" +
                  continentId +
                  "/" +
                  countryId +
                  "/" +
                  eachDestination.id
              );
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default DestinationsPage;
