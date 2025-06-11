import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

export const metadata: Metadata = {
  title: "DPE/PA - Test Environment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="">
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="flex flex-col flex-1 overflow-auto">
            <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 lg:px-4">
              {children}
            </main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
