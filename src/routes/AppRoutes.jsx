import { Routes, Route } from "react-router-dom";
import Favorites from "../pages/Favorites";
import Home from "../pages/Home";
import Medicines from "../pages/Medicines";
import AddMedicine from "../pages/AddMedicine";
import EditMedicine from "../pages/EditMedicine";
import MedicineDetails from "../pages/MedicineDetails";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";


function AppRoutes() {
  return (
    <Routes>
  <Route path="/" element={<Home />} />

  <Route path="/login" element={<Login />} />

  <Route path="/signup" element={<Signup />} />

  <Route
    path="/dashboard"
    element={
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    }
  />

  <Route
    path="/medicines"
    element={
      <ProtectedRoute>
        <Medicines />
      </ProtectedRoute>
    }
  />
  <Route
  path="/medicines/:id"
  element={<MedicineDetails />} />
  <Route
  path="/edit/:id"
  element={<EditMedicine />}
  />
    
  


  <Route
    path="/add-medicine"
    element={
      <ProtectedRoute>
        <AddMedicine />
      </ProtectedRoute>
    }
  />

  <Route
    path="/favorites"
    element={
      <ProtectedRoute>
        <Favorites />
      </ProtectedRoute>
    }
  />
</Routes>

    
  );
}

export default AppRoutes;
   