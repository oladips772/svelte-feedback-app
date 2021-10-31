import { writable } from "svelte/store";

export const feedbackStore = writable([
  {
    id: 1,
    rating: 8,
    text: "nice job",
  },
  {
    id: 2,
    rating: 12,
    text: "nice jobs",
  },
]);