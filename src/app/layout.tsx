import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/extrafazant/SmoothScroll";
import { AuthProvider } from "@/context/AuthContext";
import { ClientLayout } from "@/components/extrafazant/ClientLayout";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://learn.creditbuddy.co.in"),
  title: {
    default: "CreditBuddy Learn | Master Credit, Loans & Personal Finance",
    template: "%s | CreditBuddy Learn",
  },
  description:
    "Practical financial education by CREDITBUDDY PARTNERS PRIVATE LIMITED. Master credit scores, loan underwriting, interest rates, and debt management without banking jargon.",
  icons: {
    icon: [
      { url: "/assets/s_logo.png", sizes: "any" },
      { url: "/assets/s_logo.png", type: "image/png" },
    ],
    shortcut: "/assets/s_logo.png",
    apple: "/assets/s_logo.png",
  },
  openGraph: {
    title: "CreditBuddy Learn | Master Credit, Loans & Personal Finance",
    description:
      "Understand credit scores, loan structures, and smart financial habits with CreditBuddy Learning Academy.",
    type: "website",
    locale: "en_IN",
    siteName: "CreditBuddy Learn",
    images: [
      {
        url: "/assets/s_logo.png",
        width: 512,
        height: 512,
        alt: "CreditBuddy Learn Icon Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "CreditBuddy Learn | Master Credit, Loans & Personal Finance",
    description:
      "Understand credit scores, loan structures, and smart financial habits with CreditBuddy Learning Academy.",
    images: ["/assets/s_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "CreditBuddy Learn",
  legalName: "CREDITBUDDY PARTNERS PRIVATE LIMITED",
  url: "https://learn.creditbuddy.co.in",
  logo: "https://learn.creditbuddy.co.in/assets/s_logo.png",
  description: "Educational platform for credit score mastery, loan math, and personal financial literacy in India.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gram Devi Mandir, Matru Vihar Shanti Nagar, Budharaja",
    addressLocality: "Sambalpur",
    addressRegion: "Odisha",
    postalCode: "768004",
    addressCountry: "IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/s_logo.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/assets/s_logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="bg-[#f4f4f4] text-[#101010] antialiased selection:bg-[#21105b] selection:text-white">
        <AuthProvider>
          <SmoothScroll>
            <ClientLayout>{children}</ClientLayout>
          </SmoothScroll>
        </AuthProvider>
      </body>
    </html>
  );
}
