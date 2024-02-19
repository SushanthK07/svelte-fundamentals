import App from "./App.svelte";
import ConditionalRendering from "./ConditionalRendering.svelte";
import Counter from "./Counter.svelte";

const app = new Counter({
  target: document.body,
});

export default app;
