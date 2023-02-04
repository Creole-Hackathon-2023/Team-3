import React from "react";
import Layout from "../components/layout/Layout";
import { getVenues } from "../services/Services";

function OrganizerDashboard() {
  const [venues, setVenues] = React.useState([]);

  React.useEffect(() => {
    getVenues().then((res) => {
      setVenues(res.data);
    });
  }, []);

  console.log("qq", venues);
  return (
    <Layout>
      <h1>Hello, {localStorage.getItem("username")}</h1>
      <h3>Available Venues here...</h3>
      {venues.map((venue) => {
        return (
          <div key={venue.id} style={{ margin: "20px" }}>
            <h2>Venue Name: {venue.venue_name}</h2>
            <h2>Location: {venue.venue_location}</h2>
            <h2>Venue Type: {venue.venue_type}</h2>
            <h2>Available: {venue.venue_availabilty ? "Yes" : "No"}</h2>
            <h2>Venue Capacity: {venue.venue_capability}</h2>
            {venue.venue_availabilty && <button>Book Now</button>}
            <hr></hr>
          </div>
        );
      })}
    </Layout>
  );
}

export default OrganizerDashboard;
