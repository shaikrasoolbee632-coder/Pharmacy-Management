import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <div className="dashboard-header">
        <h1>🏥 Pharmacy Dashboard</h1>
        <p>Welcome to Pharmacy Management System</p>
      </div>

      <div className="dashboard-cards">

        <div className="card">
          <h2>💊 Medicines</h2>
          <p>View and manage all available medicines.</p>

          <Link to="/medicines">
            <button>Open</button>
          </Link>
        </div>

        <div className="card">
          <h2>➕ Add Medicine</h2>
          <p>Add new medicines to your pharmacy inventory.</p>

          <Link to="/add-medicine">
            <button>Open</button>
          </Link>
        </div>

        <div className="card">
          <h2>❤️ Favorites</h2>
          <p>View all your favourite medicines.</p>

          <Link to="/favorites">
            <button>Open</button>
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;