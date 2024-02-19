<script>
    let num = -10;
</script>

<main>
    {#if num === 0}
        The number is 0
    {:else if num > 0}
        The number is positive
    {:else if num < 0}
        The number is negative
    {:else}
        The number is not a number
    {/if}
</main>
