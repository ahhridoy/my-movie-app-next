import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        <div className="container mx-auto my-8">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
