import React from "react";
import Layout from "../components/layout/Layout";
import { getEvents } from "../services/Services";

function UserDashboard() {
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    getEvents().then((res) => {
      setEvents(res.data);
    });
  }, []);
  return (
    <Layout>
      <h1>Hello, {localStorage.getItem("username")}</h1>
      <h3>Available Events here...</h3>
      {events.map((event) => {
        return (
          <div key={event.id} style={{ margin: "20px" }}>
            <h2>Event Name: {event.event_name}</h2>
            <h2>Location: {event.event_location}</h2>
            <h2>Event Type: {event.event_type}</h2>
            {event.event_availabilty && <button>Book Now</button>}
            <hr></hr>
          </div>
        );
      })}
    </Layout>
  );
}

export default UserDashboard;
