import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ray'sStream",
  description: "Watch trending videos from creators around the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: "#0f0f0f",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
} 