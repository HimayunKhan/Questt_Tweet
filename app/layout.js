import Providers from "@/components/Providers";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="max-w-lg  mx-auto border-l border-r border-twitterBorder min-h-screen">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
