import type { GlobalConfig } from "payload";

export const Homepage: GlobalConfig = {
  slug: "homepage",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "subtitle",
      type: "text",
      required: true,
      label: "Subtitle",
    },
  ],
};
