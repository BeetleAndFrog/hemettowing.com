import type { Metadata } from "next";
import "./globals.css";

const SITE_NAME = "Hemet Towing";
const SITE_DESCRIPTION = "24/7 emergency towing and roadside assistance in Hemet, CA. Fast response, local service.";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — 24/7 Emergency Towing in Hemet, CA`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-emergency focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:font-semibold">
          Skip to main content
        </a>
        <script src="https://stats.zkg.io/api/script.js" data-site-id="8317a9198032" defer />
        {children}
      </body>
    </html>
  );
}
