import * as React from "react";
import PageLayout from "@/components/layouts/page";
import { defaultMeta } from "@/components/common/head";
import { Peep } from "@/models";
import { OurStorySection } from "@/components/sections/about/our-story";
import { OurHausSection } from "@/components/sections/about/our-haus";
import { getAboutPage } from "@/lib/contentful/api";
import ScrollParallax from "@/components/common/animations/parallax";
import ScrollGrow from "@/components/common/animations/glow-up-image";

function AboutUsPage({ peeps }: { peeps: Peep[] }) {
  console.log("peeps", peeps);
  return (
    <PageLayout
      headProps={{
        ...defaultMeta,
        title: "About Us | Laugh",
        canonical: "https://wearelaugh.com/about",
      }}
      textWhite
      withoutBackgroundTexture
      footerWhite
    >
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-texture"></div>
      <div className="max-w-[1600px] flex flex-col items-center mx-auto relative z-10">
        <div className="max-w-full overflow-x-hidden">
          <h1
            style={{ fontSize: "clamp(1rem, 15vw, 244.448px)" }}
            className="text-gold font-archivoBlack uppercase text-center"
          >
            our&nbsp;story
          </h1>
        </div>
        <div className="container flex flex-col">
          {/* HEADER */}
          <OurStorySection />
        </div>
        <OurHausSection className="mt-32" />

        {/* MAP */}
        <div className="container flex flex-col !mt-32">
          <div className="flex flex-col items-end self-start">
            <ScrollParallax parallaxSpeed={0.4}>
              <p className="font-archivoBlack text-white leading-none text-32 sm:text-[56px] md:text-[64px]">
                Thinking
              </p>
            </ScrollParallax>
            <ScrollParallax parallaxSpeed={0.8}>
              <p className="text-gold font-masker -mr-8 sm:-mr-12 md:-mr-20 text-42 sm:text-[64px] md:text-[80px] leading-none">
                global
              </p>
            </ScrollParallax>
          </div>
          <ScrollGrow>
            <img
              src="/images/about/map.png"
              alt="Map"
              className="w-full -mt-8 sm:-mt-12 md:-mt-20"
            />
          </ScrollGrow>
        </div>
      </div>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const peeps = await getAboutPage();
  return {
    props: { peeps },
  };
}

export default AboutUsPage;
