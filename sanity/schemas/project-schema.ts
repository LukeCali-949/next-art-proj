// COPIED FROM TUTORIAL
const createUniqueSlug = () => {
  return Math.random().toString(36).substring(2, 5);
};

interface Doc {
  title: string;
}

const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "artist",
      title: "Artist",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (doc: Doc) => `${doc.title}-${createUniqueSlug()}`,
        slugify: (input: string) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[\.,;:!?()\[\]{}'"_]+/g, "")
            .slice(0, 200),
      },
    },
    {
      name: "artwork",
      title: "Artwork",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "date",
          title: "Date",
          type: "date",
        },
      ],
    },
    {
      name: "artistPicture",
      title: "Artist Picture",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "content",
      title: "About The Work",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default project;
