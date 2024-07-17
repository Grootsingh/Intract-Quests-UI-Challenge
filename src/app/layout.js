import { Outfit } from "next/font/google";
import "./globals.css";

// variable font
const outfit = Outfit({
  subsets: ["latin"],
  variable: true,
});

export const metadata = {
  title: "Intract Quests",
  description: "Intract Quests Clone",
};

console.log(outfit.className);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} overflow-x-hidden bg-custom-black-1000 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
