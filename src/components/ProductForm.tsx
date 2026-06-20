"use client";

import { useState } from "react";

interface Props {
  initialData?: any;

  categories: any[];

  onSubmit: (
    data: FormData
  ) => void;
}

export default function ProductForm({
  initialData,
  onSubmit,
}: Props) {

  const [formData, setFormData] =
    useState({
      name: initialData?.name || "",
      description:
        initialData?.description || "",
      price: initialData?.price || "",
      stock: initialData?.stock || "",
      brand: initialData?.brand || "",
    });

  const [imageFile, setImageFile] =
    useState<File | null>(null);

  const [preview, setPreview] =
    useState(
      initialData?.image || ""
    );

  /*
  INPUT CHANGE
  */

  const handleChange = (
    e: any
  ) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value
    });
  };

  /*
  IMAGE CHANGE
  */

  const handleImageChange =
    (e: any) => {

      const file =
        e.target.files[0];

      if (file) {

        setImageFile(file);

        setPreview(
          URL.createObjectURL(
            file
          )
        );
      }
    };

  /*
  SUBMIT
  */

  const handleSubmit =
    (e: any) => {

      e.preventDefault();

      const data =
        new FormData();

      data.append(
        "name",
        formData.name
      );

      data.append(
        "description",
        formData.description
      );

      data.append(
        "price",
        formData.price
      );

      data.append(
        "stock",
        formData.stock
      );

      data.append(
        "brand",
        formData.brand
      );

      if (imageFile) {

        data.append(
          "image",
          imageFile
        );
      }

      onSubmit(data);
    };

  return (

    <div className="form-card">

      <form
        onSubmit={handleSubmit}
      >

        <div className="form-group">

          <label>
            Product Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>
            Description
          </label>

          <textarea
            name="description"
            value={
              formData.description
            }
            onChange={handleChange}
          />

        </div>

        <div className="form-row">

          <div className="form-group">

            <label>
              Price
            </label>

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />

          </div>

          <div className="form-group">

            <label>
              Stock
            </label>

            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
            />

          </div>

        </div>

        <div className="form-group">

          <label>
            Brand
          </label>

          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
          />

        </div>

        {/* IMAGE UPLOAD */}

        <div className="form-group">

          <label>
            Upload Image
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={
              handleImageChange
            }
          />

        </div>

        {/* PREVIEW */}

        {preview && (

          <div className="image-preview">

            <img
              src={preview}
              alt="Preview"
            />

          </div>
        )}

        <button
          className="save-btn"
          type="submit"
        >
          Save Product
        </button>

      </form>

    </div>
  );
}