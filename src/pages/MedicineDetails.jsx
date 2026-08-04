import "./MedicineDetails.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

function MedicineDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [medicine, setMedicine] = useState({});

  useEffect(() => {
    fetchMedicine();
  }, []);

  const fetchMedicine = async () => {
    try {
      const response = await api.get(`/medicines/${id}`);
      setMedicine(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="details-container">
      <div className="details-card">
        <h1 className="page-title">Medicine Details</h1>

        <button
          className="back-btn"
          onClick={() => navigate("/medicines")}
        >
          ← Back to Medicines
        </button>

        <div className="details-body">
          <img
            src={medicine.image}
            alt={medicine.name}
          />

          <div className="details-content">
            <h2>{medicine.name}</h2>

            <p><strong>Category:</strong> {medicine.category}</p>

            <p><strong>Price:</strong> ₹{medicine.price}</p>

            <p><strong>Description:</strong> {medicine.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicineDetails;