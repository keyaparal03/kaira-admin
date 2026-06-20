"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { useDispatch } from "react-redux";

import { loginAdmin } from "../../src/redux/features/authSlice";

export default function LoginPage() {
  const router = useRouter();
  const dispatch: any = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value
    });
  };

const handleSubmit =
  async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    const response =
      await dispatch(
        loginAdmin(
          formData
        )
      );

    console.log(
      "DISPATCH RESPONSE",
      response
    );

    if (
      response.meta
        ?.requestStatus ===
      "fulfilled"
    ) {

      router.push(
        "/dashboard"
      );

    } else {

      alert(
        "Login Failed"
      );
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent:
          "center",
        alignItems: "center",
        background:
          "#f5f5f5"
      }}
    >
      <div
        style={{
          width: "420px",
          background:
            "#ffffff",
          padding: "40px",
          borderRadius:
            "12px",
          boxShadow:
            "0 5px 20px rgba(0,0,0,0.1)"
        }}
      >
        <h2
          style={{
            textAlign:
              "center",
            marginBottom:
              "30px"
          }}
        >
          KAIRA Admin Login
        </h2>

        <form
          onSubmit={
            handleSubmit
          }
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={
              formData.email
            }
            onChange={
              handleChange
            }
            required
            style={{
              width: "100%",
              padding:
                "14px",
              marginBottom:
                "20px",
              border:
                "1px solid #ddd",
              borderRadius:
                "8px"
            }}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={
              formData.password
            }
            onChange={
              handleChange
            }
            required
            style={{
              width: "100%",
              padding:
                "14px",
              marginBottom:
                "20px",
              border:
                "1px solid #ddd",
              borderRadius:
                "8px"
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding:
                "14px",
              background:
                "#e91e63",
              color:
                "white",
              border: "none",
              borderRadius:
                "8px",
              cursor:
                "pointer"
            }}
          >
            {loading
              ? "Logging in..."
              : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}