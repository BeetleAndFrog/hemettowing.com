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
        {children}
      </body>
    </html>
  );
}
