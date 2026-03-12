import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  // Base URL used by Next.js to construct absolute URLs for canonical tags.
  metadataBase: new URL("https://chuangyeshuo.github.io/onehub.work"),
  title: {
    default: "OneHub - 远程一人公司社区",
    template: "%s | OneHub",
  },
  description: "远程一人公司社区，连接独立开发者与企业需求，打造专属你的一人公司。从远程，轻松当老板。",
  keywords: [
    "一人公司",
    "远程工作",
    "独立开发者",
    "自由职业",
    "外包",
    "接单",
    "onehub",
    "onehub.work",
    "chuangyeshuo.github.io/onehub.work",
    "远程",
    "远程一人公司社区",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bbad5" },
    ],
  },
  alternates: {
    canonical: "https://chuangyeshuo.github.io/onehub.work/",
  },
  openGraph: {
    title: "OneHub - 远程一人公司社区",
    description: "远程一人公司社区，连接独立开发者与企业需求，打造专属你的一人公司。从远程，轻松当老板。",
    url: "https://chuangyeshuo.github.io/onehub.work",
    siteName: "OneHub",
    images: [
      {
        url: "https://chuangyeshuo.github.io/onehub.work/onehub.work.png",
        width: 1200,
        height: 630,
        alt: "OneHub 远程一人公司社区",
      },
    ],
    locale: "zh-CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OneHub - 远程一人公司社区",
    description: "远程一人公司社区，连接独立开发者与企业需求，打造专属你的一人公司。从远程，轻松当老板。",
    images: ["https://chuangyeshuo.github.io/onehub.work/onehub.work.png"],
    // replace with actual Twitter handle if available
    creator: "@onehub",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://chuangyeshuo.github.io/onehub.work/",
    "name": "OneHub",
    "description": "远程一人公司社区，连接独立开发者与企业需求，打造专属你的一人公司。从远程，轻松当老板。",
    "publisher": {
      "@type": "Organization",
      "name": "OneHub",
      "logo": {
        "@type": "ImageObject",
        "url": "https://chuangyeshuo.github.io/onehub.work/onehub.work.png"
      }
    }
  }

  return (
    <html lang="zh-CN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
