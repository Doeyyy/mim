import { Hero } from "@/components/sections/Hero";
import { WhoIsDonMimmo } from "@/components/sections/WhoIsDonMimmo";
import { WatchAndFollow } from "@/components/sections/WatchAndFollow";
import { EmailCapture } from "@/components/sections/EmailCapture";
import { TheLetters } from "@/components/sections/TheLetters";
import { SocialProof } from "@/components/sections/SocialProof";
import { AudienceProof } from "@/components/sections/AudienceProof";
import { useReveal } from "@/hooks/use-reveal";
import { useEffect } from "react";

const Index = () => {
  useReveal();

  useEffect(() => {
    document.title = "Don Mimmo Catalano — 30 years. Four continents.";
    const meta =
      document.querySelector('meta[name="description"]') ||
      (() => {
        const m = document.createElement("meta");
        m.setAttribute("name", "description");
        document.head.appendChild(m);
        return m;
      })();
    meta.setAttribute(
      "content",
      "Don Mimmo Catalano — thirty years across four continents. Subscribe to The Don's Letters: lessons on power, loyalty and leadership."
    );
  }, []);

  return (
    <main className="bg-ink text-cream overflow-x-hidden">
      
      <Hero />
      <WhoIsDonMimmo />
      <AudienceProof />
      <WatchAndFollow />
      <EmailCapture />
      <TheLetters />
      <SocialProof />
    </main>
  );
};

export default Index;
