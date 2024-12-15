import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

import "./globals.scss";
import { theme } from "@/theme";

export const metadata: Metadata = {
  title: "Kuchenna Komitywa",
  description: "Kuchenna Komitywa",
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
