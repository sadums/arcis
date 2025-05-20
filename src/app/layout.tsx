import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arcis",
  description: "Arcis LLC offical website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/* Footer */}
        <footer className="text-center py-6 text-gray-500 dark:text-gray-400 text-xs border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
          <span>&copy; {new Date().getFullYear()} Arcis. All rights reserved.</span>
          <a
            href="https://www.linkedin.com/company/YOUR-LINKEDIN-HANDLE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 hover:text-black dark:hover:text-white transition"
          >
            <svg
              className="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.6v2.16h.05c.5-.94 1.72-1.92 3.54-1.92C20.1 8.24 21 10.18 21 13.06V24h-4v-9.26c0-2.2-.04-5.04-3.07-5.04-3.08 0-3.55 2.4-3.55 4.88V24h-4V8z" />
            </svg>
          </a>
        </footer>

      </body>
    </html>
  );
}
