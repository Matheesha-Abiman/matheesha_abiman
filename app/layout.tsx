import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Background from "@/components/Background";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Matheesha Abiman KNK",
  description: "Portfolio of Matheesha Abiman - Full-Stack Developer & UI/UX Designer",
  icons: {
    icon: "/profile.png",
  },
  keywords: ["Matheesha Abiman", "Full-Stack Developer", "UI/UX Designer", "React", "Next.js", "Java", "Python", "TypeScript", "portfolio", "Matheesha Abiman KNK", "Matheesha Abiman portfolio"],
  authors: [{ name: "Matheesha Abiman" }],
  openGraph: {
    title: "Matheesha Abiman",
    description: "Portfolio showcasing projects and skills in full-stack development and UI/UX design",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          <Background />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
