import type { Metadata, Viewport } from "next";
import { Cairo, El_Messiri } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { site, basePath } from "@/lib/data";

const body = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const display = El_Messiri({
  subsets: ["arabic", "latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const description =
  "الموقع الرسمي للحملة الانتخابية للمترشح بن صديق خلف الله للمجلس الشعبي الوطني عن ولاية تيارت. معًا من أجل تيارت قوية وعادلة ومزدهرة — برنامج انتخابي ومشاريع استراتيجية لتنمية متوازنة.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.candidate} | ${site.role} - ولاية تيارت`,
    template: `%s | ${site.candidate}`,
  },
  description,
  applicationName: `حملة ${site.candidate}`,
  authors: [{ name: site.candidate }],
  generator: "Next.js",
  keywords: [
    "بن صديق خلف الله",
    "تيارت",
    "المجلس الشعبي الوطني",
    "انتخابات الجزائر",
    "التجمع الوطني الديمقراطي",
    "RND",
    "البرنامج الانتخابي",
    "مترشح تيارت",
    "تنمية تيارت",
  ],
  category: "politics",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ar_DZ",
    url: site.url,
    siteName: `حملة ${site.candidate}`,
    title: `${site.candidate} | ${site.role} - ولاية تيارت`,
    description,
    images: [
      {
        url: "/images/candidate-profile.png",
        width: 1200,
        height: 630,
        alt: site.candidate,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.candidate} | ${site.role}`,
    description,
    images: ["/images/candidate-profile.png"],
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
  icons: {
    icon: `${basePath}/images/rnd-logo.png`,
    apple: `${basePath}/images/rnd-logo.png`,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f9f7" },
    { media: "(prefers-color-scheme: dark)", color: "#080d0b" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.candidate,
  jobTitle: site.role,
  affiliation: {
    "@type": "PoliticalParty",
    name: site.party,
  },
  homeLocation: {
    "@type": "Place",
    name: site.province,
  },
  url: site.url,
  image: `${site.url}/images/candidate-profile.png`,
  sameAs: [site.facebookPage],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${body.variable} ${display.variable}`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#home"
            className="sr-only focus:not-sr-only focus:fixed focus:right-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-algeria-green focus:px-5 focus:py-2 focus:text-white"
          >
            تخطّي إلى المحتوى
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
