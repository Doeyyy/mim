import { Hero } from "@/components/sections/Hero";
import { WhoIsDonMimmo } from "@/components/sections/WhoIsDonMimmo";
import { WatchAndFollow } from "@/components/sections/WatchAndFollow";
import { EmailCapture } from "@/components/sections/EmailCapture";
import { TheLetters } from "@/components/sections/TheLetters";
import { SocialProof } from "@/components/sections/SocialProof";
import { AudienceProof } from "@/components/sections/AudienceProof";
import { useReveal } from "@/hooks/use-reveal";
import { useSEO } from "@/hooks/use-seo";

const Index = () => {
  useReveal();
  useSEO({
    title: "Don Mimmo Catalano — Power, Loyalty & Leadership",
    description:
      "Don Mimmo Catalano: 30 years across four continents. Subscribe to The Don's Letters for lessons on power, loyalty and leadership. Ascolta bene.",
    path: "/",
  });

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
