import "./EditMedicine.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

function EditMedicine() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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

  useEffect(() => {
    getMedicine();
  }, []);

  const getMedicine = async () => {
    try {
      const response = await api.get(`/medicines/${id}`);
      setFormData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/medicines/${id}`, formData);
      alert("Medicine Updated Successfully!");
      navigate("/medicines");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="edit-container">
      <div className="edit-card">
        <h1>Edit Medicine</h1>

        <form className="edit-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Medicine Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="genericName"
            placeholder="Generic Name"
            value={formData.genericName}
            onChange={handleChange}
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
          />

          <button type="submit">
            Update Medicine
          </button>

        </form>
      </div>
    </div>
  );
}

export default EditMedicine;