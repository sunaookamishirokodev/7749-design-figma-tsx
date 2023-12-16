import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
const font = Roboto_Condensed({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Pricing Cards",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <div className={font.className}>{children}</div>;
}
