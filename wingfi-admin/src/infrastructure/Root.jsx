import { Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "../app/homepage/HomePage";
import Ecommerce from "../app/ecommerce/Ecommerce";
import AddAttributes from "../app/attributes/AddAttributes";
import Attributes from "../app/attributes/Attributes";
import OrderList from "../app/order/OrderList";
import OrderDetails from "../app/order/OrderDetails";
import OrderTracking from "../app/order/OrderTracking";
import AllUser from "../app/user/AllUser";
import AddNewUser from "../app/user/AddNewUser";
import CategoryList from "../app/category/CategoryList";
import NewCategory from "../app/category/NewCategory";
import LoginPage from "../app/user/login";
import Report from "../app/report/Report";

function Root() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ecommerce" element={<Ecommerce />} />
      <Route path="/attributes" element={<Attributes />} />
      <Route path="/add-attributes" element={<AddAttributes />} />
      <Route path="/category-list" element={<CategoryList />} />
      <Route path="/new-category" element={<NewCategory />} />
      <Route path="/order-list" element={<OrderList />} />
      <Route path="/order-details" element={<OrderDetails />} />
      <Route path="/order-tracking" element={<OrderTracking />} />
      <Route path="/all-user" element={<AllUser />} />
      <Route path="/add-new-user" element={<AddNewUser />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/report" element={<Report />} />
    </Routes>
  );
}

export default Root;
