import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "y0vesx2c",
  dataset: "production",
  apiVersion: "v2022-03-07",
  useCdn: true,
});
