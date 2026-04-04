import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});


export const metadata: Metadata = {
  title: "NeuraVia Academy | Brain-Visual",
  description: "An interactive neuroscience learning platform with 3D brain models, Alzheimer's progression simulations, and in-depth research articles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
