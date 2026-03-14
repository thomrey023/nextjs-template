import type { Metadata } from "next";

import "./globals.css";
import { GeistMono, GeistSans, LatoFont, NotoSans } from "./fonts";
import Header from "@/components/header/header";
import { cn } from "@/lib/utils";
import { getServerSideURL } from "@/lib/getUrl";
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={cn(
        NotoSans.variable,
        LatoFont.variable,
        GeistSans.variable,
        GeistMono.variable,
        "scroll-smooth",
      )}
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
