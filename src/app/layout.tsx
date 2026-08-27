import type { Metadata } from "next";
import { Sarabun } from "next/font/google";
import Script from "next/script";
import { siteConfig } from "@/data/site";
import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const sarabun = Sarabun({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sarabun",
});

export const metadata: Metadata = {
  title: "BugussoBox | รับผลิตกล่องจั่วปังพรีเมียม (Rigid Box) คุณภาพสูง โรงงานไทย",
  description: siteConfig.description,
  keywords: [
    "กล่องจั่วปัง",
    "กล่อง Rigid Box",
    "กล่องกระดาษพรีเมียม",
    "รับผลิตกล่อง",
    "กล่องสั่งทำ",
    "กล่องฝาครอบเต็มใบ",
    "กล่องฝาเปิดหนังสือ",
    "กล่องแม่เหล็ก",
    "กล่องปลอกหนังสือ",
    "โรงงานกล่อง",
    "บรรจุภัณฑ์",
  ],
  robots: { index: true, follow: true },
  authors: [{ name: "BugussoBox" }],
  openGraph: {
    type: "website",
    title: "BugussoBox | รับผลิตกล่องจั่วปังพรีเมียม คุณภาพสูง",
    description:
      "โรงงานผลิตกล่อง Rigid Box คุณภาพสูง ในประเทศไทย สั่งทำกล่องทุกรูปทรง ควบคุมคุณภาพทุกขั้นตอน",
    url: siteConfig.url,
    images: [siteConfig.ogImage],
    locale: "th_TH",
  },
  twitter: {
    card: "summary_large_image",
  },
  metadataBase: new URL(siteConfig.url),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bugussobox.com/#business",
  name: "BugussoBox กล่องจั่วปังพรีเมียม",
  image: siteConfig.ogImage,
  description:
    "โรงงานผลิตกล่อง Rigid Box (กล่องจั่วปัง) ส่งทำทุกรูปทรง คุณภาพสูง ควบคุมการผลิตทุกขั้นตอน",
  url: siteConfig.url,
  telephone: "+666600800233",
  address: {
    "@type": "PostalAddress",
    addressCountry: "TH",
    addressLocality: "Thailand",
  },
  areaServed: { "@type": "Country", name: "Thailand" },
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className={sarabun.variable}>
        {/* Facebook Pixel - noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${siteConfig.facebookPixelId}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>

        <Topbar />
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Facebook Pixel Script */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${siteConfig.facebookPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      </body>
    </html>
  );
}