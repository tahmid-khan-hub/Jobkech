import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jobkech",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-white`}>
        {/* Purple Glow Background */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background: "#ffffff",
              backgroundImage: ` radial-gradient( circle at top left, rgba(173, 109, 244, 0.5), transparent 70% ) `,
              filter: "blur(80px)",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
        {/* Page Content */}
        <div>{children}</div>
      </body>
    </html>
  );
}
