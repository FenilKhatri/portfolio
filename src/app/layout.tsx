import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/store/Provider";
import ThemeProvider from "@/store/ThemeProvider";
import { Toaster } from "sonner";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Fenil Khatri | MERN Stack Developer",
  description: "Portfolio of Fenil Khatri, a MERN Stack Developer specializing in responsive and user-focused web applications.",
  metadataBase: new URL("https://fenil-portfolio.vercel.app"),
  authors: [{ name: "Fenil Khatri" }],
  creator: "Fenil Khatri",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Fenil Khatri",
  url: "https://fenil-khatri.vercel.app",
  jobTitle: "MERN Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <ReduxProvider>
          <ThemeProvider>
            <Toaster position="top-right" />
            {children}
          </ThemeProvider>
        </ReduxProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Fenil Khatri",
              jobTitle: "Software Engineering Intern",
              url: "https://fenil-khatri.vercel.app",
              sameAs: [
                "https://github.com/FenilKhatri",
                "https://linkedin.com/in/fenilkhatri/",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </body>
    </html>
  );
}