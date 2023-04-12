import { createClient } from "microcms-js-sdk";

const apiKey = process.env.API_KEY ?? "default_api_key";
export const client = createClient({
  serviceDomain: "hatanooo",
  apiKey: apiKey,
});
