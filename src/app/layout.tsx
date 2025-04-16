import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Winnie's Pastries",
  description: "Handmade pastries and cakes for every occasion",
  // openGraph: {
  //   title: "Winnie's Pastries",
  //   description: "Handmade pastries and cakes for every occasion",
  // },
  // twitter: {
  //   title: "Winnie's Pastries",
  //   description: "Handmade pastries and cakes for every occasion",
  //   card: "summary_large_image",
  //   images: [
  //     {
  //       url: "/icon.png",
  //       alt: "Winnie's Pastries Icon",
  //     },
  //   ],
  // },
  // appleWebApp: {
  //   title: "Winnie's Pastries",
  //   statusBarStyle: "default",
  //   capable: true,

  // },
  
  // manifest: "/manifest.json",
  icons: {
    icon: "/icon.png",
  },
  
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
