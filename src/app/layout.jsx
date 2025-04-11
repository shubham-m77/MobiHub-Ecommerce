import { Urbanist } from "next/font/google"; // Import the font
import "./globals.css"; // Import global CSS (make sure this defines fonts and other styles)
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Navbar from "@/components/Navbar"; // Import Navbar component
import Footer from "@/components/Footer"; // Import Footer component
import { ToastContainer } from 'react-toastify';
import { CartProvider } from "@/context/cartContext";
// Initialize the Urbanist font with variable for use in CSS
const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata = {
  title: "MobiHub - An GenZ Ecommerce Web",
  description: "One Stop Solution for Tech Hub",
  keyword:"Get All Types Of Tech Products,MobiHub,mobihub,mobihub-ecommerce,mobihub-genz"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Make sure to include other meta tags for SEO here */}
      </head>
      <body className={`${urbanist.variable}`}>
        <CartProvider>
        <Navbar /> {/* Navbar for all pages */}
        <main>{children}</main> {/* Main content for all pages */}
        <ToastContainer />
        <Footer /> {/* Footer for all pages */}
        </CartProvider>
      </body>
    </html>
  );
}
