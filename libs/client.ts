import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "hatanooo",
  apiKey: process.env.API_KEY,
});
