import "./globals.css";
import "../src/styles/admin.scss";
import "../src/styles/product.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProviderWrapper from "../src/redux/Provider";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ProviderWrapper>
          {children}
          <ToastContainer
            position="top-right"
            autoClose={3000}
          />
        </ProviderWrapper>
      </body>
    </html>
  );
}