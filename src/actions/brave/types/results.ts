export type WebResult = {
  title: string;
  description: string;
  url: string;
  profile: {
    name: string;
    url: string;
    long_name: string;
    img: string;
  };
  meta_url: {
    scheme: string;
    netloc: string;
    hostname: string;
    favicon: string;
    path: string;
  };
};

export type VideoResult = {
  title: string;
  meta_url: {
    scheme: string;
    netloc: string;
    hostname: string;
    favicon: string;
    path: string;
  };
  description: string;
  url: string;
  video: {
    publisher: string;
    creator: string;
    duration: string;
  };
  age: string;
  thumbnail: { src: string };
};

export type NewsResult = {
  title: string;
  meta_url: {
    scheme: string;
    netloc: string;
    hostname: string;
    favicon: string;
    path: string;
  };
  description: string;
  url: string;
  age: string;
  thumbnail: { src: string };
  source: string;
};

export type ImageResult = {
  thumbnail: { src: string };
  title: string;
  url: string;
  source: string;
  meta_url: {
    scheme: string;
    netloc: string;
    hostname: string;
    favicon: string;
    path: string;
  };
  properties: {
    url: string;
    placeholder: string;
  };
};
