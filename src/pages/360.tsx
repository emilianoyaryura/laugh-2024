import * as React from "react";
import VerticalPageLayout from "@/components/layouts/vertical-page";
import { defaultMeta } from "@/components/common/head";
import { TextAndImages } from "@/components/sections/verticals/text-and-images";
import { TextMarquee } from "@/components/common/text-marquee";
import ScrollGrow from "@/components/common/animations/glow-up-image";
import { getWorksByTag } from "@/lib/contentful/api";
import { GetStaticProps } from "next";
import { WorkPreview } from "@/models";
import { ScrollableWorks } from "@/components/sections/work/scrollable-works";
import Counters from "@/components/sections/verticals/360/counters";

export default function Page({ works }: { works: WorkPreview[] }) {
  return (
    <VerticalPageLayout
      headProps={{
        ...defaultMeta,
        title: "360 | Laugh",
      }}
      logo={
        <img
          src="/images/logos/360.svg"
          className="w-[160px] sm:w-[200px] h-auto"
          alt="home logo"
        />
      }
      color="yellow"
    >
      <div className="container relative !mt-20 z-40">
        <Counters className="my-32" />
        <TextAndImages
          images={[
            "/images/assets/film.jpg",
            "/images/assets/mexico.jpg",
            "/images/assets/mexico-1.jpg",
            "/images/assets/beach.jpg",
          ]}
          markdown={
            "**Sparking Creativity, Blowing Minds.**\n\nIn the exciting world of sports, we're the innovative thinkers, making campaigns that surprise and impress. With passion driving us, we're the creators of the most exciting experiences. Crafting Sports Epics, Frame by Frame, Story by Story."
          }
          color="yellow"
        />
      </div>
      <TextMarquee
        text="We know how to connect with the fan through an authentic, fresh, original strategy that enhances this bond between our partner and its target audience."
        color="yellow"
      />
      <div className="container">
        <div className="flex-1 flex flex-col gap-2">
          <ScrollGrow>
            <img
              src="/images/assets/work-1.jpg"
              alt="work hero"
              className="w-full max-w-full h-auto"
            />
          </ScrollGrow>
          <div className="grid sm:grid-cols-2 gap-2">
            <ScrollGrow>
              <img
                src="/images/assets/work-vertical-1.jpg"
                alt="work hero"
                className="w-full max-w-full h-auto"
              />
            </ScrollGrow>
            <ScrollGrow>
              <img
                src="/images/assets/work-vertical-2.jpg"
                alt="work hero"
                className="hidden sm:flex w-full max-w-full h-auto"
              />
            </ScrollGrow>
          </div>
        </div>
      </div>
      <div className="!py-16 z-40 relative overflow-x-hidden mt-20">
        <ScrollableWorks works={works} title="Works" />
      </div>
      <img
        src="/images/textures/paper.jpg"
        className="w-full h-full absolute top-0 left-0 opacity-10 z-0"
        alt="texture bg"
      />
    </VerticalPageLayout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const works = await getWorksByTag("360");

  return {
    props: { works },
  };
};
