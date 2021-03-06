import React from "react";
import { Route, Routes } from "react-router-dom";
import AddCar from "./components/AddCar/AddCar";
import Details from "./components/Details/Details";
import EditCar from "./components/EditCar/EditCar";
import CarsList from "./components/CarsList/CarsList";
import AboutUs from "./components/AboutUs/AboutUs";
import Cart from "./components/Cart/Cart";
import Profile from "./components/Profile/Profile";
import Map from "./components/Map/Map";
import AllCarsList from "./components/AllCarsList/AllCarsList";
import Carousel1 from "./components/Carousel/Carousel";
import PaymentForm from "./components/PaymentForm/PaymentForm";
import OrderForm from "./components/OrderForm/OrderForm";
import ThankYou from "./components/ThankYou/ThankYou";
import Support from "./components/Support/Support";
import CommentsList from "./components/CommentsList/CommentsList";
import AddComment from "./components/AddComment/AddComment";
import EditComment from "./components/EditComment/EditComment";


const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Carousel1 />} />
      <Route path="/support" element={<Support />} />

      <Route path="/cars" element={<CarsList />} />
      <Route path="/all-cars" element={<AllCarsList />} />
      <Route path="/add" element={<AddCar />} />
      <Route path="/edit/:id" element={<EditCar />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Profile />} />
      <Route path="/address" element={<Map />} />
      <Route path="/order" element={<OrderForm />} />
      <Route path="/payment" element={<PaymentForm />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/comments" element={<CommentsList />} />
      <Route path="/add-comment/" element={<AddComment />} />
      <Route path="/edit-comment/:id" element={<EditComment />} />
    </Routes>
  );
};

export default Routing;
