<script>
	const name = "Sushanth";
	const age = 27;
	const role = "<b>Software Engineer</b>";
	const id = "sushanthk07";
	const disabled = false;
	const status = "success";
	const married = false;
</script>

<main>
	<!-- <h1 id={id}>Hello {name}!</h1> -->
	<h1 {id}>Hello {name}!</h1>
	<p>You are a {@html role}</p>
	<p class="underline">Your age: {age}</p>
	<p class={status}>Status: {status}</p>
	<!-- <p class={married ? 'married' : ''}>Married: {married}</p> -->
	<!-- <p class:married={married}>Married: {married}</p> -->
	<p class:married>Married: {married}</p>
	<button {disabled}>Toggle</button>
</main>

<style>
	/* static class */
	.underline {
		text-decoration: underline;
	}

	/* dynamic class */
	.danger {
		color: red;
	}

	.success {
		color: green;
	}

	.married {
		color: pink;
	}

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