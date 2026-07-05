import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Helpdesk System</h2>

      <div className="navbar-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/tickets">Tickets</Link>
        <Link to="/create-ticket">Create Ticket</Link>
      </div>
    </nav>
  );
}

export default Navbar;