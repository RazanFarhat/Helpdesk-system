import { useEffect, useState } from "react";

function Dashboard() {
const [tickets, setTickets] = useState([]);

useEffect(() => {
fetch("http://127.0.0.1:8000/api/tickets")
.then((response) => response.json())
.then((data) => {
setTickets(data);
});
}, []);

const openTickets = tickets.filter(
(ticket) => ticket.status?.name === "Open"
).length;

const inProgressTickets = tickets.filter(
(ticket) => ticket.status?.name === "In Progress"
).length;

const closedTickets = tickets.filter(
(ticket) => ticket.status?.name === "Closed"
).length;

return (
<div
style={{
padding: "40px",
backgroundColor: "#f5f7fb",
minHeight: "100vh",
}}
> <h1>Dashboard</h1>


  <div
    style={{
      display: "flex",
      gap: "20px",
      marginTop: "30px",
    }}
  >
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "12px",
        width: "200px",
      }}
    >
      <h3>Total Tickets</h3>
      <h1>{tickets.length}</h1>
    </div>

    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "12px",
        width: "200px",
      }}
    >
      <h3>Open</h3>
      <h1>{openTickets}</h1>
    </div>

    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "12px",
        width: "200px",
      }}
    >
      <h3>In Progress</h3>
      <h1>{inProgressTickets}</h1>
    </div>

    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "12px",
        width: "200px",
      }}
    >
      <h3>Closed</h3>
      <h1>{closedTickets}</h1>
    </div>
  </div>
</div>


);
}

export default Dashboard;
