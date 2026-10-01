import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/extrafazant/SmoothScroll";
import { AuthProvider } from "@/context/AuthContext";
import { ClientLayout } from "@/components/extrafazant/ClientLayout";

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://learn.creditbuddy.co.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CreditBuddy Learn | Master Credit, Loans & Personal Finance",
    template: "%s | CreditBuddy Learn",
  },
  description:
    "Practical financial education by CREDITBUDDY PARTNERS PRIVATE LIMITED. Master credit scores, loan underwriting, interest rates, and debt management without banking jargon.",
  keywords: [
    "credit score",
    "CIBIL score",
    "loan underwriting",
    "personal finance India",
    "credit education",
    "debt management",
    "financial literacy",
    "EMI calculator",
    "credit report",
    "loan eligibility",
    "CreditBuddy",
    "MSME loans",
    "interest rates",
    "APR",
    "debt payoff",
  ],
  authors: [{ name: "CREDITBUDDY PARTNERS PRIVATE LIMITED", url: "https://creditbuddy.org.in" }],
  creator: "CREDITBUDDY PARTNERS PRIVATE LIMITED",
  publisher: "CREDITBUDDY PARTNERS PRIVATE LIMITED",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
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
    url: siteUrl,
    images: [
      {
        url: "/assets/s_logo.png",
        width: 512,
        height: 512,
        alt: "CreditBuddy Learn — Financial Literacy Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CreditBuddy Learn | Master Credit, Loans & Personal Finance",
    description:
      "Understand credit scores, loan structures, and smart financial habits with CreditBuddy Learning Academy.",
    images: ["/assets/s_logo.png"],
    creator: "@creditbuddy",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "education",
};

// Organization structured data
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "CreditBuddy Learn",
  legalName: "CREDITBUDDY PARTNERS PRIVATE LIMITED",
  url: siteUrl,
  logo: `${siteUrl}/assets/s_logo.png`,
  description:
    "Educational platform for credit score mastery, loan math, and personal financial literacy in India.",
  foundingDate: "2024",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gram Devi Mandir, Matru Vihar Shanti Nagar, Budharaja",
    addressLocality: "Sambalpur",
    addressRegion: "Odisha",
    postalCode: "768004",
    addressCountry: "IN",
  },
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "support@creditbuddy.org.in",
    availableLanguage: ["English", "Hindi"],
  },
};

// Website search action structured data
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "CreditBuddy Learn",
  url: siteUrl,
  description: "Financial literacy and credit education platform by CreditBuddy.",
  publisher: {
    "@type": "Organization",
    name: "CREDITBUDDY PARTNERS PRIVATE LIMITED",
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/assets/s_logo.png`,
    },
  },
};

// Course list structured data for rich results
const courseListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "CreditBuddy Learning Tracks",
  description: "Structured financial literacy courses covering credit, loans, and debt management.",
  numberOfItems: 6,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Course",
        name: "Credit Score Mastery",
        description:
          "Learn how CIBIL, Experian and Equifax calculate scores, spot errors, and maintain a 750+ profile.",
        url: `${siteUrl}/werk/credit-score-mastery`,
        provider: { "@type": "Organization", name: "CreditBuddy Learn" },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Course",
        name: "Loan Math & Underwriting",
        description:
          "Understand how lenders evaluate credit risk, compute debt-to-income, and calculate real monthly EMIs.",
        url: `${siteUrl}/werk/loan-math-underwriting`,
        provider: { "@type": "Organization", name: "CreditBuddy Learn" },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Course",
        name: "Debt Payoff & Cashflow",
        description:
          "Frameworks for eliminating multiple loans using the debt avalanche and snowball methods.",
        url: `${siteUrl}/werk/debt-payoff-cashflow`,
        provider: { "@type": "Organization", name: "CreditBuddy Learn" },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Course",
        name: "Interest Rates & APR",
        description:
          "Why a 10% flat rate is nearly double a 10% reducing balance rate, and how to calculate APR.",
        url: `${siteUrl}/werk/interest-rates-apr`,
        provider: { "@type": "Organization", name: "CreditBuddy Learn" },
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Course",
        name: "Loan Eligibility & FOIR",
        description:
          "What banks and NBFCs look for in bank statements, salary slips, and employment history.",
        url: `${siteUrl}/werk/personal-loan-eligibility`,
        provider: { "@type": "Organization", name: "CreditBuddy Learn" },
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Course",
        name: "MSME & Business Borrowing",
        description:
          "Navigate working capital, GST returns, and merchant cash advances for business expansion.",
        url: `${siteUrl}/werk/business-loan-underwriting`,
        provider: { "@type": "Organization", name: "CreditBuddy Learn" },
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="aOA52vHLfxmNZjDtIbmJwqRyFE3H9QDFE2C3vGYRNac" />
        <link rel="icon" href="/assets/s_logo.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/assets/s_logo.png" />
        <link rel="canonical" href={siteUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseListJsonLd) }}
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
