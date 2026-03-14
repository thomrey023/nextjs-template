import { Geist, Geist_Mono, Lato, Noto_Sans } from "next/font/google";

export const GeistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const GeistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const LatoFont = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "700", "900"],
});

export const NotoSans = Noto_Sans({
  variable: "--font-notosans",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900", "200", "500", "600", "800"],
});
