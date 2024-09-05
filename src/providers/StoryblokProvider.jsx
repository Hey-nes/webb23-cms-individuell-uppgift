"use client";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "@/components/content-types/Page";
import Teaser from "@/components/nestable/Teaser";
import RichTextDefault from "@/components/nestable/RichText";
import ColumnBlock from "@/components/nestable/ColumnBlock";
import GridBlock from "@/components/nestable/GridBlock";

const components = {
  "page": Page,
  "teaser":Teaser,
  "richtext": RichTextDefault,
  "column": ColumnBlock,
  "grid": GridBlock
}

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,

  use: [apiPlugin],
  components
});

export default function StoryblokProvider({ children }) {
  return (
    children
  );
}