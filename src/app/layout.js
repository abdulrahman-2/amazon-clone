import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Notifications from "@/components/notifications/Notifications";
import LayoutProvider from "@/components/providers/LayoutProvider";

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
    <html lang="en">
      <body className={poppins.className}>
        <LayoutProvider>
          <Notifications />
          <Header />
          {children}
          <Footer />
        </LayoutProvider>
      </body>
    </html>
  );
}
