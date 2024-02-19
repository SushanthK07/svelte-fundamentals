<script>
	const name = "Sushanth";
	const role = "<b>Software Engineer</b>";
	const id = "sushanthk07";
	const disabled = false;
</script>

<main>
	<!-- <h1 id={id}>Hello {name}!</h1> -->
	<h1 {id}>Hello {name}!</h1>
	<p>You are a {@html role}</p>
	<button {disabled}>Bind</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>