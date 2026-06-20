"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="logo">
        KAIRA ADMIN
      </div>

      <nav>

        <ul>

          <li>
            <Link href="/dashboard">
              📊 Dashboard
            </Link>
          </li>

          <li>
            <Link href="/products">
              📦 Products
            </Link>
          </li>

          <li>
            <Link href="/categories">
              🗂 Categories
            </Link>
          </li>

          <li>
            <Link href="/users">
              👤 Users
            </Link>
          </li>

          <li>
            <Link href="/orders">
              🛒 Orders
            </Link>
          </li>

        </ul>

      </nav>

    </aside>
  );
}