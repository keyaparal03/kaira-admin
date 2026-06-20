import "./globals.css";
import "../src/styles/admin.scss";
import "../src/styles/product.scss";

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
        </ProviderWrapper>
      </body>
    </html>
  );
}