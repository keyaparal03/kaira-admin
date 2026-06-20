"use client";

import {
  useState
} from "react";

import {
  useDispatch
} from "react-redux";

import {
  createProduct
} from "../../../src/redux/features/productSlice";

export default function AddProductPage() {

  const dispatch: any =
    useDispatch();

  const [formData,
    setFormData] =
    useState({

      name: "",

      price: "",

      description: "",

      category: "",

      stock: ""
    });

  const handleSubmit =
    (e: any) => {

      e.preventDefault();

      dispatch(
        createProduct(
          formData
        )
      );
    };

  return (

    <form
      onSubmit={
        handleSubmit
      }
    >

      <input
        placeholder="Name"

        onChange={(e) =>
          setFormData({
            ...formData,
            name:
              e.target.value
          })
        }
      />

      <input
        placeholder="Price"

        onChange={(e) =>
          setFormData({
            ...formData,
            price:
              e.target.value
          })
        }
      />

      <button>
        Save Product
      </button>

    </form>
  );
}