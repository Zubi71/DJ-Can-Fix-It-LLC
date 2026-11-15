import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DJ Can Fix It LLC | Handyman in Montgomery, AL",
  description:
    "DJ Can Fix It LLC — rated 4.8 stars from 16 reviews. General handyman services in Montgomery, AL: drywall & painting, minor plumbing & electrical, carpentry, flooring, doors & windows, furniture assembly and home repairs. Call (334) 854-8187 for a free quote.",
  icons: { icon: "/logo.svg" },
  openGraph: {
    title: "DJ Can Fix It LLC | Handyman in Montgomery, AL",
    description:
      "Rated 4.8 stars from 16 reviews. Reliable handyman services in Montgomery, AL. Call (334) 854-8187 for a free quote.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
