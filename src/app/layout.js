import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "paulo é lindo 123",
  description: "eu adoro churros teste 123",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className={inter.className}>
        <Header/>
        <div id="forum">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
