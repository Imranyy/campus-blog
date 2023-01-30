<script>
// @ts-nocheck

/** @type {import('./$types').PageData} */
export let data;

</script>

<div class="about start">
    {#if data.data}
        <h1>{data.data.name}</h1>
        <p>{data.data.email}</p>
    {:else}
        <div class="tag">
            <p class="error">{data.error}</p>
        </div>
    {/if}
    
</div>
