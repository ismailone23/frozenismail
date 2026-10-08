import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

const siteUrl = "https://www.ismailh.dev";
const name = "Ismail Hossain";
const defaultTitle = `${name} | Developer & Designer`;
const description =
  "Ismail Hossain is a full-stack developer and designer, building web apps, React Native mobile apps, AI and computer vision projects. Explore his work and get in touch.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0b0f", // match your dark background
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${name}`,
  },
  description,
  applicationName: `${name} Portfolio`,
  keywords: [
    "Ismail Hossain",
    "Ismail Hossain portfolio",
    "Ismail MIST",
    "Ismail MIST CSE",
    "MIST CSE developer",
    "full-stack developer",
    "React developer",
    "Next.js developer",
    "React Native developer",
    "computer vision",
    "web developer Bangladesh",
  ],
  authors: [{ name, url: siteUrl }],
  creator: name,
  publisher: name,
  category: "technology",
  alternates: { canonical: "/" },
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: name,
    title: defaultTitle,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${name} — MIST CSE full-stack developer and designer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description,
    images: ["/og-image.png"],
    // creator: "@yourhandle",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  // verification: { google: "YOUR_SEARCH_CONSOLE_TOKEN" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name,
  url: siteUrl,
  jobTitle: "Full-stack Developer and Designer",
  description,
  image: `${siteUrl}/og-image.png`,
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "Military Institute of Science and Technology (MIST)",
  },
  knowsAbout: [
    "Full-stack development",
    "React",
    "Next.js",
    "React Native",
    "Computer vision",
    "UI/UX design",
  ],
  sameAs: [
    "https://github.com/ismailone23",
    "https://www.linkedin.com/in/ismail-hossain-b475312b9",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark scroll-smooth ${hanken.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-background text-on-surface font-body-md min-h-screen flex flex-col selection:bg-primary-container selection:text-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
