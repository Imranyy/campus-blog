<script>
// @ts-nocheck

/** @type {import('./$types').PageData} */
export let data;

</script>

<div class="detail start">
    {#if data.data}
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <a href={data.data.image}><img src={data.data.image} alt="blog image"/></a>
        <div class="content">
            <div class="author">Author: 
                <div class="info"><a href={data.data.authorImage}><img src={data.data.authorImage} alt='.'/></a> <b>{data.data.author}</b></div> 
            </div>
            <h1>{data.data.title}</h1>
            <p>{data.data.body}</p>
        </div>
    {:else}
        <div class="tag">
            <p class="error">{data.error}</p>
        </div>
    {/if}
    
</div>
