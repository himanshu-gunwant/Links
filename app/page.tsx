import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { LinkCard } from "@/components/LinkCard";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { linksConfig } from "@/config/links";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function LinksPage() {
  const profileUrl = process.env.NEXT_PUBLIC_LINKS_URL || "https://links.himanshugunwant.com";
  const mainSiteUrl = linksConfig.header.url;

  const profileJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: linksConfig.header.name,
      url: mainSiteUrl,
      image: `${mainSiteUrl}${linksConfig.header.avatar}`,
      jobTitle: "Developer & Builder",
      description: linksConfig.header.tagline,
      alumnusOf: {
        "@type": "EducationalOrganization",
        name: "Indian Institute of Information Technology, Tiruchirappalli",
      },
      sameAs: linksConfig.links
        .filter((l) => !l.href.startsWith("mailto:"))
        .map((l) => l.href),
    },
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${linksConfig.header.name} — Links Hub`,
    url: profileUrl,
    numberOfItems: linksConfig.links.length,
    itemListElement: linksConfig.links.map((link, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: link.label,
      url: link.href,
      description: link.description,
    })),
  };

  return (
    <div className="py-6 sm:py-10 space-y-4">
      <JsonLd data={[profileJsonLd, itemListJsonLd]} />

      {/* Hero / Profile Header */}
      <Header header={linksConfig.header} />

      {/* Seamless Stack of Link Items */}
      <section aria-label="Links Hub" className="space-y-1 pt-4">
        {linksConfig.links.map((link, index) => (
          <LinkCard key={link.id} link={link} index={index} />
        ))}
      </section>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
