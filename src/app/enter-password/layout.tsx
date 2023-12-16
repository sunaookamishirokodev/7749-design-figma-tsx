import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enter Password",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
