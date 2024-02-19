<script>
	const name = "Sushanth";
	const age = 27;
	const role = "<b>Software Engineer</b>";
	const id = "sushanthk07";
	const disabled = false;
	let status = "success";
	const married = false;
	const skills = ["React", "Svelte"];
	const experiences = [
		{ role: "Software Engineer", company: "Needl.ai" },
		{ role: "Planning Engineer", company: "L&T"},
	];

	const toggleStatus = () => {
		status = status === "success" ? "danger" : "success";
	};
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
	<button {disabled} on:click={toggleStatus}>Toggle</button>
	<br />
	<h3>Skills</h3>
	{#each skills as skill, index (skill)}
		<h6>{index + 1}: {skill}</h6>
	{/each}
	<br />
	<h3>Experiences</h3>
	{#each experiences as experience, index (experience.company)}
		<p>{index + 1}: {experience.role} at {experience.company}</p>
	{/each}
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