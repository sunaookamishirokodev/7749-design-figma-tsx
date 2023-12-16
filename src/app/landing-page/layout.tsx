import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
const font = JetBrains_Mono({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Landing page",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <div className={font.className}>{children}</div>;
}
