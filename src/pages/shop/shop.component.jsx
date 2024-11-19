import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { Route, Routes } from "react-router-dom";
import CollectionPage from "../collection/collection.component";

const ShopPage = () => (
  <div className="shop-page">
    <Routes>
      <Route path="/" element={<CollectionsOverview />} />
      <Route path=":categoryId" element={<CollectionPage />} />
    </Routes>
  </div>
);

export default ShopPage;
