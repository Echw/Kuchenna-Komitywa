import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

import { theme } from "@/theme";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Kuchenna Komitywa",
  description: "Kuchenna Komitywa",
  icons: {
    icon: [
      {
        url: "logo-dark.svg",
        media: "(prefers-color-scheme: dark)",
      },

      {
        url: "logo.svg",
        media: "(prefers-color-scheme: light)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning is a temporary fix for Next.js bug with hydration
    <html lang="pl" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
