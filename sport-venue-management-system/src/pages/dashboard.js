import React from "react";
import UserDashboard from "./userDashboard";
import OrganizerDashboard from "./organizerDashboard";

function Dashboard() {
  console.log("ddd", localStorage.getItem("email"));
  return (
    <div>
      {localStorage.getItem("role") === "user" ? (
        <UserDashboard />
      ) : (
        <OrganizerDashboard />
      )}
    </div>
  );
}

export default Dashboard;
