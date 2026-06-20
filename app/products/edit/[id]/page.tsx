"use client";

import { useEffect } from "react";

import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  useRouter,
  useParams
} from "next/navigation";

import Sidebar from "../../../../components/Sidebar";
import Navbar from "../../../../components/Navbar";
import ProductForm from "../../../../src/components/ProductForm";

import {
  fetchCategories
} from "../../../../src/redux/features/categorySlice";

import {
  fetchProductById,
  updateProduct
} from "../../../../src/redux/features/productSlice";

export default function EditProductPage() {

  const dispatch: any =
    useDispatch();

  const router =
    useRouter();

  const params =
    useParams();

  const productId =
    params.id as string;

  /*
  REDUX STATE
  */

  const { categories } =
    useSelector(
      (state: any) =>
        state.category
    );

  const { product } =
    useSelector(
      (state: any) =>
        state.product
    );

  /*
  LOAD CATEGORY + PRODUCT
  */

  useEffect(() => {

    dispatch(
      fetchCategories()
    );

    if (productId) {

      dispatch(
        fetchProductById(
          productId
        )
      );
    }

  }, [
    dispatch,
    productId
  ]);

  /*
  UPDATE PRODUCT
  */

  const handleSubmit =
    async (
      data: FormData
    ) => {

      await dispatch(

        updateProduct({

          id: productId,

          data
        })
      );

      router.push(
        "/products"
      );
    };

  /*
  LOADING
  */

  if (!product) {

    return (
      <p>
        Loading...
      </p>
    );
  }

  return (

    <div className="admin-layout">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="page-header">

          <h2>
            Edit Product
          </h2>

        </div>

        <ProductForm

          initialData={
            product
          }

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