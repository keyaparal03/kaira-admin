"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import Sidebar from "../../../components/Sidebar";
import Navbar from "../../../components/Navbar";
import ProductForm from "../../../src/components/ProductForm";
import { toast } from "react-toastify";
import {
  fetchCategories
} from "../../../src/redux/features/categorySlice";

import {
  createProduct
} from "../../../src/redux/features/productSlice";

export default function CreateProductPage() {

  const dispatch: any =
    useDispatch();

  const router =
    useRouter();

  /*
  GET CATEGORY STATE
  */

  const categoryState =
    useSelector(
      (state: any) =>
        state.category
    );

  const categories =
    categoryState?.categories || [];

  /*
  LOAD CATEGORIES
  */

  useEffect(() => {

    dispatch(
      fetchCategories()
    );

  }, [dispatch]);

  /*
  CREATE PRODUCT
  */

  const handleSubmit =
    async (
      data: FormData
    ) => {

      console.log("FORM DATA");

      for (
        const pair
        of data.entries()
      ) {
        console.log(
          pair[0],
          pair[1]
        );
      }

      await dispatch(
        createProduct(data)
      );
       toast.success(
        "Product created successfully"
      );


      router.push(
        "/products"
      );
    };

  return (

    <div className="admin-layout">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="page-header">

          <h2>
            Add Product
          </h2>

        </div>

        <ProductForm

          categories={
            categories
          }

          onSubmit={
            handleSubmit
          }

        />

      </div>

    </div>
  );
}