import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Tie the Knot Cyprus",
  description: "Get in touch with Vicki and Lee for a complimentary wedding planning consultation. Phone: +357 99 123456, Email: info@tietheknotcyprus.net",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
