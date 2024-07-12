import PageLayout from "@/components/layouts/page";
import { defaultMeta } from "@/components/common/head";
import { EmblaCarousel } from "@/design-system/carousel";

const projects = [
  {
    title: "La bombonera regresa",
    description: "Description 1",
    image: "/images/projects/project1.jpg",
  },
  {
    title: "México manda",
    description: "Description 2",
    image: "/images/projects/project2.jpg",
  },
  {
    title: "Heroes",
    description: "Description 3",
    image: "/images/projects/project3.jpg",
  },
];

export default function Home() {
  return (
    <PageLayout
      headProps={{
        ...defaultMeta,
        title: "Laugh | share laughs, share sports",
      }}
      rootClassName="bg-gray-400"
    >
      {/* so we get the full screen. We dont take into account the nav */}
      <div className="h-[calc(100vh-137px)] w-full overflow-hidden flex flex-col relative">
        <div className="container">
          <div className="flex flex-col gap-4 !max-w-[420px] text-12 uppercase leading-[1.8] mt-32">
            <p>
              <i>WE POWER PASSION</i>
            </p>
            <p>
              <b>Welcome to Laugh.</b> An <b>award winning</b> sports marketing
              agency delivering <b>first class results.</b> We specialize in
              formulating, building, and scaling strategies across key
              verticals, <b>generating revenue from the passion of sports.</b>
            </p>
            <p>
              At Laugh, our profound understanding of fans enables us to{" "}
              <b>enhance the commercial value of sports</b>, from{" "}
              <b>
                maximizing your sponsorship rights, upscaling your online
                presence
              </b>
              , capitalize on key market opportunities with{" "}
              <b>premium content production.</b>
            </p>
          </div>
        </div>
        <div className="w-full absolute bottom-0 left-0">
          <EmblaCarousel
            slides={projects}
            options={{ direction: "ltr", loop: true }}
          />
        </div>
      </div>
    </PageLayout>
  );
}
