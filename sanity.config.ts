import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "xy17xfms",
  dataset: "production",
  title: "My Favorite Art Gallery",
  apiVersion: "2023-06-10",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
