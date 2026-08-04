
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../redux/favoriteSlice";
import "./Favorites.css";


function Favorites() {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites.favorites);

 return (
  <div className="favorites-container">

    <div className="favorites-header">
      <h1>❤️ Favorite Medicines</h1>
      <p>Your saved medicines are displayed here.</p>
    </div>

    <div className="favorites-grid">
      {favorites.map((medicine) => (
        <div className="favorite-card" key={medicine.id}>
          <img src={medicine.image} alt={medicine.name} />

          <h2>{medicine.name}</h2>

          <p><strong>Category:</strong> {medicine.category}</p>

          <p><strong>Price:</strong> ₹{medicine.price}</p>

          <p><strong>Description:</strong> {medicine.description}</p>

          <button
            className="remove-btn"
            onClick={() => dispatch(removeFavorite(medicine.id))}
          >
            ❤️ Remove Favorite
          </button>
        </div>
      ))}
    </div>

  </div>
);
}

export default Favorites;
