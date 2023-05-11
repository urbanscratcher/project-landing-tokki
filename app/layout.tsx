import { Plus_Jakarta_Sans as Jakarta } from "next/font/google";
import DetailModal from "./_components/DetailModal";
import Navbar from "./_components/Navbar";
import "./globals.css";

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
      <body className={jakarta.className}>
        <DetailModal />
        <Navbar />
        {children}
        <div>Shared-Footer</div>
      </body>
    </html>
  );
}
