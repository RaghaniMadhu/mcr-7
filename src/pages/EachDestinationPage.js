import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { TripAdvisorContext } from "../contexts/TripAdvisorContext";

function EachDestinationPage() {
  const { continentId, countryId, destinationId } = useParams();
  const { continentsData } = useContext(TripAdvisorContext);

  const ourContinentCountries = continentsData.find(
    ({ id }) => id.toString() === continentId
  ).countries;
  const ourDestinations = ourContinentCountries.find(
    ({ id }) => id.toString() === countryId
  ).destinations;
  const ourDestination = ourDestinations.find(
    ({ id }) => id.toString() === destinationId
  );

  console.log(ourContinentCountries, ourDestinations, ourDestination);

  return (
    <div className="flex-column-center-center">
      <h1 className="text-align-center">{ourDestination.name}</h1>
      <div className="flex-row gap-1">
        <img
          src={ourDestination.image}
          alt={ourDestination.image}
          className="destination-image"
        />
        <div className="flex-column gap-1 justify-center">
          <div className="flex-row gap-point-5">
            <p className="margin-block-0 blue-color">Description:</p>
            <p className="margin-block-0">{ourDestination.description}</p>
          </div>
          <div className="flex-row gap-point-5">
            <p className="margin-block-0 blue-color">Ratings: </p>
            <p className="margin-block-0">{ourDestination.ratings}</p>
          </div>
          <div className="flex-row gap-point-5">
            <p className="margin-block-0 blue-color">Reviews: </p>
            <p className="margin-block-0">{ourDestination.reviews}</p>
          </div>
          <div className="flex-row gap-point-5">
            <p className="margin-block-0 blue-color">Location: </p>
            <p className="margin-block-0">{ourDestination.location}</p>
          </div>
          <div className="flex-row gap-point-5">
            <p className="margin-block-0 blue-color">Opening Hours: </p>
            <p className="margin-block-0">{ourDestination.openingHours}</p>
          </div>
          <div className="flex-row gap-point-5">
            <p className="margin-block-0 blue-color">Ticket Price: </p>
            <p className="margin-block-0">{ourDestination.ticketPrice}</p>
          </div>
          <a href={ourDestination.website}>{ourDestination.website}</a>
        </div>
      </div>
    </div>
  );
}

export default EachDestinationPage;
