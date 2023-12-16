import Link from "next/link";

export default function Home() {
  return (
    <main>
      {[
        {
          href: "/enter-password",
          title: "Enter password",
        },
        {
          href: "/pricing-cards",
          title: "Pricing cards",
        },
        {
          href: "/landing-page",
          title: "Landing page",
        },
      ].map(({ href, title }, i) => {
        return (
          <li key={i}>
            <Link href={href}>{title}</Link>
          </li>
        );
      })}
    </main>
  );
}
