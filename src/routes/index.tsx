import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Cursor } from "@/components/site/Cursor";
import { Nav } from "@/components/site/Nav";
import { DanceForms, Events, FinalCta, Gallery, Hero, NextGeneration, Principles, Roots, Teachers } from "@/components/site/Sections";
import { Rhythm } from "@/components/site/Rhythm";
import { Contact } from "@/components/site/Contact";

const title = "Prashadi Art Academy | Traditional Dance Classes in Kurunegala";
const description =
  "Prashadi Art Academy in Kurunegala offers Sri Lankan traditional dance classes for children, teenagers and young dancers.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["DanceSchool", "EducationalOrganization"],
  name: "Prashadi Art Academy",
  slogan: "Where Heritage Finds Its Rhythm.",
  foundingDate: "2018",
  address: { "@type": "PostalAddress", addressLocality: "Kurunegala", addressCountry: "LK" },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Roots />
        <DanceForms />
        <NextGeneration />
        <Principles />
        <Teachers />
        <Events />
        <Gallery />
        <Rhythm />
        <FinalCta />
      </main>
      <Contact />
      <Toaster />
    </>
  );
}
