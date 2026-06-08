import { useState } from "react";

function CreateTicket() {
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [categoryId, setCategoryId] = useState(1);
const [priorityId, setPriorityId] = useState(1);
const [statusId, setStatusId] = useState(1);

const handleSubmit = async (e) => {
e.preventDefault();


console.log("BUTTON CLICKED");

const ticketData = {
  title: title,
  description: description,
  category_id: categoryId,
  priority_id: priorityId,
  status_id: statusId,
};

try {
  const response = await fetch(
    "http://127.0.0.1:8000/api/tickets",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticketData),
    }
  );

  const data = await response.json();

  console.log(data);

  alert("Ticket created successfully!");

  setTitle("");
  setDescription("");
  setCategoryId(1);
  setPriorityId(1);
  setStatusId(1);

} catch (error) {
  console.error(error);
  alert("Error creating ticket");
}


};

return (
<div
style={{
minHeight: "100vh",
backgroundColor: "#f5f7fb",
display: "flex",
justifyContent: "center",
alignItems: "center",
}}
>
<div
style={{
width: "600px",
backgroundColor: "white",
padding: "40px",
borderRadius: "16px",
boxShadow: "0 2px 20px rgba(0,0,0,0.08)",
}}
>
<h1
style={{
marginBottom: "30px",
textAlign: "center",
}}
>
Create Ticket </h1>


    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      <input
        type="text"
        placeholder="Ticket Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows="5"
        style={{
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

      <select
        value={categoryId}
        onChange={(e) => setCategoryId(Number(e.target.value))}
      >
        <option value={1}>Hardware</option>
        <option value={2}>Software</option>
        <option value={3}>Network</option>
      </select>

      <select
        value={priorityId}
        onChange={(e) => setPriorityId(Number(e.target.value))}
      >
        <option value={1}>Low</option>
        <option value={2}>Medium</option>
        <option value={3}>High</option>
      </select>

      <select
        value={statusId}
        onChange={(e) => setStatusId(Number(e.target.value))}
      >
        <option value={1}>Open</option>
        <option value={2}>In Progress</option>
        <option value={3}>Closed</option>
      </select>

      <button
        type="submit"
        style={{
          backgroundColor: "#001f8f",
          color: "white",
          border: "none",
          padding: "14px",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Create Ticket
      </button>
    </form>
  </div>
</div>


);
}

export default CreateTicket;
