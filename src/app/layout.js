import "./globals.css";
export const metadata = {
  title: "AI Robotic",
  description: "Học AI Robotic nắm chắc tương lai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          {children}
        </div>
      </body>
    </html>
  );
}
