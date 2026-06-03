import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Public_Sans } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'HVAC Lead Gen Pro | Predictable Leads for HVAC Businesses',
  description: 'Transform your HVAC business into a predictable lead machine with our AI-powered marketing system. Generate qualified leads, automate follow-up, and book more jobs.',
  keywords: ["HVAC marketing, HVAC leads, HVAC lead generation, AI marketing, predictable growth, booked jobs, local service marketing, home services marketing"],
  openGraph: {
    "title": "HVAC Lead Gen Pro | Predictable Leads for HVAC Businesses",
    "description": "Transform your HVAC business into a predictable lead machine with our AI-powered marketing system. Generate qualified leads, automate follow-up, and book more jobs.",
    "url": "https://www.hvacleadgenpro.com",
    "siteName": "HVAC Lead Gen Pro",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/student-home-taking-notes-while-watching-presentation-closeup_482257-118737.jpg",
        "alt": "HVAC Lead Dashboard"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "HVAC Lead Gen Pro | Predictable Leads for HVAC Businesses",
    "description": "Transform your HVAC business into a predictable lead machine with our AI-powered marketing system. Generate qualified leads, automate follow-up, and book more jobs.",
    "images": [
      "http://img.b2bpic.net/free-photo/student-home-taking-notes-while-watching-presentation-closeup_482257-118737.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};



const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${dmSans.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
