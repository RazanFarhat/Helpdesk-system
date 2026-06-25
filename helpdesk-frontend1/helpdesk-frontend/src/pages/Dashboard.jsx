import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
} from "recharts";

function Dashboard() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/tickets")
      .then((response) => response.json())
      .then((data) => {
        setTickets(data);
      })
      .catch((error) => {
        console.error(error);
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
  const chartData = [
  {
    name: "Open",
    value: openTickets,
  },
  {
    name: "In Progress",
    value: inProgressTickets,
  },
  {
    name: "Closed",
    value: closedTickets,
  },
];

  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#f5f7fb",
        minHeight: "100vh",
      }}
    >
      <h1>Dashboard</h1>

      {/* KPI Cards */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px",
          flexWrap: "wrap",
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

      {/* Analytics Section */}
      <div
        style={{
          marginTop: "40px",
          backgroundColor: "white",
          padding: "25px",
          borderRadius: "12px",
          maxWidth: "700px",
        }}
      >
        <h2>Ticket Status Distribution</h2>
        <PieChart width={400} height={300}>
  <Pie
    data={chartData}
    dataKey="value"
    nameKey="name"
    outerRadius={100}
    label
  >
    <Cell fill="#2563eb" />
    <Cell fill="#f59e0b" />
    <Cell fill="#16a34a" />
  </Pie>

  <Tooltip />
  <Legend />
</PieChart>

        {/* Open */}
        <p style={{ marginTop: "20px" }}>
          Open ({openTickets})
        </p>

        <div
          style={{
            backgroundColor: "#e5e7eb",
            height: "25px",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              width: `${openTickets * 50}px`,
              height: "25px",
              backgroundColor: "#2563eb",
              borderRadius: "8px",
            }}
          />
        </div>

        {/* In Progress */}
        <p style={{ marginTop: "20px" }}>
          In Progress ({inProgressTickets})
        </p>

        <div
          style={{
            backgroundColor: "#e5e7eb",
            height: "25px",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              width: `${inProgressTickets * 50}px`,
              height: "25px",
              backgroundColor: "#f59e0b",
              borderRadius: "8px",
            }}
          />
        </div>

        {/* Closed */}
        <p style={{ marginTop: "20px" }}>
          Closed ({closedTickets})
        </p>

        <div
          style={{
            backgroundColor: "#e5e7eb",
            height: "25px",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              width: `${closedTickets * 50}px`,
              height: "25px",
              backgroundColor: "#16a34a",
              borderRadius: "8px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;