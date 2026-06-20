"use client";

import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import DashboardCard from "../../components/DashboardCard";

export default function DashboardPage() {
  return (
    <div className="admin-layout">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="cards">

          <DashboardCard
            title="Products"
            count={25}
            icon="📦"
            cardClass="product-card"
          />

          <DashboardCard
            title="Categories"
            count={8}
            icon="🗂️"
            cardClass="category-card"
          />

          <DashboardCard
            title="Users"
            count={120}
            icon="👤"
            cardClass="user-card"
          />

        </div>

      </div>

    </div>
  );
}