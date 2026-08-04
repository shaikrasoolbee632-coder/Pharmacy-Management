import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "./AddMedicine.css";

function AddMedicine() {
  const navigate = useNavigate();

  const [medicine, setMedicine] = useState({
    name: "",
    genericName: "",
    category: "",
    dosageForm: "",
    strength: "",
    price: "",
    stockQuantity: "",
    expiryDate: "",
    requiresPrescription: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setMedicine({
      ...medicine,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/medicines", medicine);
      alert("Medicine Added Successfully!");
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Failed to add medicine");
    }
  };

  return (
    <div className="add-container">
      <div className="add-card">
        <h2>Add Medicine</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Medicine Name"
            value={medicine.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="genericName"
            placeholder="Generic Name"
            value={medicine.genericName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={medicine.category}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="dosageForm"
            placeholder="Dosage Form"
            value={medicine.dosageForm}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="strength"
            placeholder="Strength"
            value={medicine.strength}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={medicine.price}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="stockQuantity"
            placeholder="Stock Quantity"
            value={medicine.stockQuantity}
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="expiryDate"
            value={medicine.expiryDate}
            onChange={handleChange}
            required
          />

          <label>
            <input
              type="checkbox"
              name="requiresPrescription"
              checked={medicine.requiresPrescription}
              onChange={handleChange}
            />
            Requires Prescription
          </label>

          <button type="submit">Add Medicine</button>

        </form>
      </div>
    </div>
  );
}

export default AddMedicine;