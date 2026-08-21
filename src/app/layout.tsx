import type { Metadata, Viewport } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Trelia — Software sob medida, construído para durar.",
  description:
    "Trelia é uma software house brasileira. Desenvolvemos os sistemas que sua empresa precisa para crescer, da arquitetura ao deploy.",
};

export const viewport: Viewport = {
  themeColor: "#08090D",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${jetBrainsMono.variable}`}>
      <body className="bg-ink font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}
