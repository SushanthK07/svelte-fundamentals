<script>
    let count = 0;

    const increment = (event, value = 1) => {
        console.log(event);
        count += value;
    };

    const decrement = (_, value = 1) => {
        count -= value;
    };
</script>

<main>
    <h1>The count is {count}</h1>
    <button on:click={increment}>
        Click to increment
    </button>
    <button on:click={decrement}>
        Click to decrement
    </button>
    <button on:click={() => count = 0}>
        Click to reset
    </button>
    <br />
    <button on:click={(event) => increment(event, 5)}>
        Increase by 5
    </button>
    <button on:click={(event) => decrement(event, 5)}>
        Decrease by 5
    </button>
</main>
