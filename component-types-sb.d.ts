import { StoryblokStory } from "storyblok-generate-ts";

export interface AllArticlesStoryblok {
  headline?: string;
  _uid: string;
  component: "all-articles";
  [k: string]: any;
}

export interface AssetStoryblok {
  _uid?: string;
  id: number;
  alt?: string;
  name: string;
  focus?: string;
  source?: string;
  title?: string;
  filename: string;
  copyright?: string;
  fieldtype?: string;
  meta_data?: null | {
    [k: string]: any;
  };
  is_external_url?: boolean;
  [k: string]: any;
}

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface ArticleStoryblok {
  image?: AssetStoryblok;
  title?: string;
  description?: string;
  content?: RichtextStoryblok;
  author?: string;
  created?: string;
  time?: string;
  contentMD?: string;
  _uid: string;
  component: "article";
  [k: string]: any;
}

export interface GridStoryblok {
  columns?: (
    | AllArticlesStoryblok
    | ArticleStoryblok
    | GridStoryblok
    | PageStoryblok
  )[];
  _uid: string;
  component: "grid";
  [k: string]: any;
}

export interface PageStoryblok {
  body?: (
    | AllArticlesStoryblok
    | ArticleStoryblok
    | GridStoryblok
    | PageStoryblok
  )[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}
