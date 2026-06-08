
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Tickets() {
  const [tickets, setTickets] = useState([]);
  const [editingTicket, setEditingTicket] = useState(null);

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

  const deleteTicket = async (id) => {
    try {
      await fetch(
        `http://127.0.0.1:8000/api/tickets/${id}`,
        {
          method: "DELETE",
        }
      );

      setTickets(
        tickets.filter(
          (ticket) => ticket.id !== id
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const updateTicket = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/tickets/${editingTicket.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editingTicket),
        }
      );

      const updatedTicket = await response.json();

      const refreshedResponse = await fetch(
  "http://127.0.0.1:8000/api/tickets"
);

const refreshedTickets =
  await refreshedResponse.json();

setTickets(refreshedTickets);

      setEditingTicket(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f7fb",
        padding: "40px",
      }}
    >
      <h1>Tickets</h1>

      {editingTicket && (
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "12px",
            marginBottom: "20px",
          }}
        >
          <h2>Edit Ticket</h2>

          <input
            type="text"
            value={editingTicket.title}
            onChange={(e) =>
              setEditingTicket({
                ...editingTicket,
                title: e.target.value,
              })
            }
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
            }}
          />

          <textarea
            
            value={editingTicket.description}
            onChange={(e) =>
              setEditingTicket({
                ...editingTicket,
                description: e.target.value,
              })
            }
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
            }}
          />
          <select
  value={editingTicket.category_id}
  onChange={(e) =>
    setEditingTicket({
      ...editingTicket,
      category_id: Number(e.target.value),
    })
  }
>
  <option value={1}>Hardware</option>
  <option value={2}>Software</option>
  <option value={3}>Network</option>
</select>

<select
  value={editingTicket.priority_id}
  onChange={(e) =>
    setEditingTicket({
      ...editingTicket,
      priority_id: Number(e.target.value),
    })
  }
>
  <option value={1}>Low</option>
  <option value={2}>Medium</option>
  <option value={3}>High</option>
</select>

<select
  value={editingTicket.status_id}
  onChange={(e) =>
    setEditingTicket({
      ...editingTicket,
      status_id: Number(e.target.value),
    })
  }
>
  <option value={1}>Open</option>
  <option value={2}>In Progress</option>
  <option value={3}>Closed</option>
</select>

          <button onClick={updateTicket}>
            Save Changes
          </button>

          <button
            onClick={() => setEditingTicket(null)}
            style={{ marginLeft: "10px" }}
          >
            Cancel
          </button>
        </div>
      )}
      <Link to="/create-ticket">
  <button
    style={{
      backgroundColor: "#001f8f",
      color: "white",
      border: "none",
      padding: "12px 20px",
      borderRadius: "8px",
      cursor: "pointer",
      marginBottom: "20px",
    }}
  >
    + New Ticket
  </button>
</Link>

      {tickets.map((ticket) => (
        <div
          key={ticket.id}
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "12px",
            marginBottom: "20px",
          }}
        >
          <h3>{ticket.title}</h3>

          <p>{ticket.description}</p>

          <p>
            <strong>Category:</strong>{" "}
            {ticket.category?.name}
          </p>

          <p>
            <strong>Priority:</strong>{" "}
            {ticket.priority?.name}
          </p>

          <p>
            <strong>Status:</strong>{" "}
            {ticket.status?.name}
          </p>

          <button
            onClick={() =>
              setEditingTicket(ticket)
            }
          >
            Edit
          </button>

          <button
            onClick={() =>
              deleteTicket(ticket.id)
            }
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Tickets;

