import type { Metadata } from "next";

import { GeistMono, GeistSans, LatoFont, NotoSans } from "@/app/fonts";
import { getServerSideURL } from "@/lib/getUrl";
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";
import { cn } from "@/lib/utils";
import "/globals.css";

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
        {children}
      </body>
    </html>
  );
}
