"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchProducts,
  deleteProduct
} from "../../src/redux/features/productSlice";

import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import ProductTable from "../../src/components/ProductTable";

export default function ProductPage() {
  const dispatch: any = useDispatch();

  const products = useSelector(
    (state: any) => state.product?.products || []
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = (id: string) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="admin-layout">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        <div className="page-header">
          <h2>Products1</h2>
          <button className="add-btn">
            + Add Product
          </button>
        </div>

        <ProductTable
          products={products}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}