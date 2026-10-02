export interface Article {
  slug: string;
  title: string;
  intro: string;
  text: string;
  tags: string[];
  mainImage: RemoteImage;
  created: string;
}

export interface RemoteImage {
  url: string;
  width: number;
  height: number;
  description: string;
}

export interface Tag {
  name: string;
  slug: string;
  usedTimes: number;
}
