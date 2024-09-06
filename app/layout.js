import { Open_Sans } from 'next/font/google'
import "./globals.css";

const openSans = Open_Sans({
  subsets: ['latin'],
  // weights: ['300', '400', '600', '700'],
  // styles: ['normal', 'italic'],
});

export const metadata = {
  title: "Goodplace CRM",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={openSans.className}
      >
        {children}
      </body>
    </html>
  );
}
