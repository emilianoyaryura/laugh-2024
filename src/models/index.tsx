export type Quote = {
  quote: string;
  author: string;
};

export type TextSlider = {
  text: string;
};

export type ImageTextProps = {
  image: string;
  text: string;
};

export type ImageTextGalleryProps = ImageTextProps[];

export type WorkTemplateProps = {
  name: string;
  slug: string;
  imagePreview: string;
  tags: string[];
  date: {
    start: number;
    end: number;
  };
  imageGallery: { url: string; description: string }[];
  heroVideo: string;
  heroTitle: any;
  heroDescription: any;
  featured: boolean;
  deliverables: string[];
  components: Quote | TextSlider | ImageTextGalleryProps;
  bottomVideoLink: string;
};

export type WorkPreview = Pick<
  WorkTemplateProps,
  "name" | "slug" | "imagePreview" | "tags" | "date"
>;

export type CarouselSlideProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};
