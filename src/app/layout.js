import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Notifications from "@/components/notifications/Notifications";
import StoreProvider from "./StoreProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: "normal",
});

export const metadata = {
  title: "Home | Amazon Clone App",
  description: "Amazon is the largest store in the world",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={poppins.className}>
          <Notifications />
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
