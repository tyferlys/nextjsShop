import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Интернет-магазин",
  description: "магазин",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={"flex flex-col min-h-screen"}>
          <Header />
          <div className={"flex-grow"}>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
