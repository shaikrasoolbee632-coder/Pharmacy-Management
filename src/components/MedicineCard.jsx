import "./MedicineCard.css";
import { useNavigate } from "react-router-dom";

function MedicineCard({ medicine, onDelete, onFavorite }) {
  const navigate = useNavigate();

  return (
    <div className="medicine-card">
      <img src={medicine.image} alt={medicine.name} />

      <div className="medicine-content">
        <h3>{medicine.name}</h3>

        <p>
          <strong>Category:</strong> {medicine.category}
        </p>

        <p>
          <strong>Price:</strong> ₹{medicine.price}
        </p>
      </div>

      <div className="medicine-actions">
        <button
          className="view-btn"
          onClick={() => navigate(`/medicines/${medicine.id}`)}
        >
          👁 View
        </button>

        <button
          className="edit-btn"
          onClick={() => navigate(`/edit/${medicine.id}`)}
        >
          ✏ Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(medicine.id)}
        >
          🗑 Delete
        </button>

        <button
          className="fav-btn"
          onClick={() => onFavorite(medicine)}
        >
          ❤ Favourite
        </button>
      </div>
    </div>
  );
}

export default MedicineCard;
      
        