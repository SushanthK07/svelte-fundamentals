import App from "./App.svelte";
import ConditionalRendering from "./ConditionalRendering.svelte";
import Counter from "./Counter.svelte";
import Form from "./Form.svelte";
import Reactive from "./Reactive.svelte";

const app = new Reactive({
  target: document.body,
});

export default app;
