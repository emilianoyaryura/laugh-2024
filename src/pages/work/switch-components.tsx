import { Quote as QuoteComponent } from "@/components/common/dynamic-sections/quote";
import { TextMarquee } from "@/components/common/text-marquee";
import { CustomComponent } from "@/models";

export const SwitchComponents = ({
  component,
}: {
  component: CustomComponent;
}) => {
  switch (component.type) {
    case "quote":
      return (
        <div className="container !my-40 flex items-center justify-center">
          <QuoteComponent
            quote={{
              quote: component.quote,
              author: component.author,
              type: "quote",
            }}
          />
        </div>
      );
    case "text-slider":
      return <TextMarquee text={component.text} color="black" />;
    case "image-text-gallery":
      return (
        <div>
          {component.images.map((image, index) => (
            <div key={index}>
              <img src={image.image} alt="" />
              <p>{image.text}</p>
            </div>
          ))}
        </div>
      );
  }
};