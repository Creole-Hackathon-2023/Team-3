import React from "react";
import Layout from "../components/layout/Layout";
import { getVenues } from "../services/Services";

function Home() {
  const [events, setEvents] = React.useState([]);

  return (
    <Layout>
      <h1>Event List Here...</h1>
    </Layout>
  );
}

export default Home;
