import * as React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Link from "next/link";

export const EmblaCarouselAutoScroll = ({
  slides,
  options,
  setPlayingProject,
}: {
  slides: { title: string; description: string; image: string }[];
  options?: EmblaOptionsType;
  setPlayingProject: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true, speed: 3 }),
  ]);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const toggleAutoplay = React.useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    const playOrStop = autoScroll.isPlaying()
      ? autoScroll.stop
      : autoScroll.play;
    playOrStop();
  }, [emblaApi]);

  React.useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    setIsPlaying(autoScroll.isPlaying());
    emblaApi
      .on("autoScroll:play", () => setIsPlaying(true))
      .on("autoScroll:stop", () => setIsPlaying(false))
      .on("reInit", () => setIsPlaying(autoScroll.isPlaying()));
  }, [emblaApi]);

  React.useEffect(() => {
    toggleAutoplay();
  }, []);

  return (
    <div className="embla w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((item, idx) => (
            <div
              className="embla__slide"
              key={item.title}
              onMouseEnter={() => {
                setPlayingProject(idx);
                toggleAutoplay();
              }}
              onMouseLeave={() => {
                setPlayingProject(null);
                toggleAutoplay();
              }}
            >
              <Link href={"/"} className="slide" key={item.title}>
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="embla__controls">
        <button className="embla__play" onClick={toggleAutoplay} type="button">
          {isPlaying ? "Stop" : "Start"}
        </button>
      </div> */}
    </div>
  );
};
