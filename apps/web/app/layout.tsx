export const metadata = {
  title: "Ray'sStream",
  description: "YouTube but better",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
       
        {/* 🔥 HEADER */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "12px 16px",
            borderBottom: "1px solid #ddd",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          🔥 Ray’sStream
        </div>

        {/* PAGE CONTENT */}
        <div>{children}</div>

      </body>
    </html>
  );
} 
