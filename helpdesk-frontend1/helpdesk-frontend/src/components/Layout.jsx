import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <div className="layout">

      <aside className="sidebar">
        <h2 className="logo">Helpdesk</h2>

        <nav>
          <Link to="/dashboard">📊 Dashboard</Link>
          <Link to="/tickets">🎫 Tickets</Link>
          <Link to="/create-ticket">➕ Create Ticket</Link>
        </nav>
      </aside>

      <main className="content">
        <Outlet />
      </main>

    </div>
  );
}

export default Layout;