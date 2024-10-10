import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ReduxProvider from "@/redux/ReduxProvider";

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
    <ReduxProvider>
      <html lang="en">
        <body className={poppins.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ReduxProvider>
  );
}
