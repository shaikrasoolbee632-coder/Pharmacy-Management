import "./Medicines.css";
import { useEffect, useState } from "react";
import api from "../services/api";
import MedicineCard from "../components/MedicineCard";
import { useDispatch } from "react-redux";
import { addFavorite } from "../redux/favoriteSlice";

function Medicines() {
  const [medicines, setMedicines] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const dispatch = useDispatch();

  useEffect(() => {
    getMedicines();
  }, []);

  const getMedicines = async () => {
    try {
      const response = await api.get("/medicines");
      setMedicines(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/medicines/${id}`);
      getMedicines();
    } catch (error) {
      console.log(error);
    }
  };

  const handleFavorite = (medicine) => {
    dispatch(addFavorite(medicine));
    alert("Added to Favorites");
  };

  const filteredMedicines = medicines.filter((medicine) => {
    const searchMatch = medicine.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch =
      category === "All" || medicine.category === category;

    return searchMatch && categoryMatch;
  });

  return (
    <div className="medicines-container">
      <h1 className="page-title">
        Medicines ({filteredMedicines.length})
      </h1>

      <div className="search-filter">
        <input
          type="text"
          placeholder="Search Medicine..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Tablet">Tablet</option>
          <option value="Capsule">Capsule</option>
          <option value="Syrup">Syrup</option>
          <option value="Injection">Injection</option>
          <option value="Antibiotic">Antibiotic</option>
        </select>
      </div>

      <div className="medicines-grid">
        {filteredMedicines.map((medicine) => (
          <MedicineCard
            key={medicine.id}
            medicine={medicine}
            onDelete={handleDelete}
            onFavorite={handleFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default Medicines;