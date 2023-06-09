import { Plus_Jakarta_Sans as Jakarta } from "next/font/google";
import DetailModal from "./_components/organisms/DetailModal";
import Footer from "./_components/organisms/Footer";
import Navbar from "./_components/organisms/Navbar";
import Social from "./_components/organisms/Social";
import "./globals.css";
// import dynamic from "next/dynamic";

const jakarta = Jakarta({ subsets: ["latin"] });

export const metadata = {
  title: "Tokki Soju",
  description: "The most authentic experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jakarta.className} suppressHydrationWarning={true}>
        <DetailModal />
        <Navbar />
        {children}
        <Footer />
        <Social />
      </body>
    </html>
  );
}
