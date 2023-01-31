<script>
    /** @type {import('./$types').PageData} */
     export let data;
    let title=`For you`;

    // setTimeout(()=>{
    //     // @ts-ignore
    //     document.querySelector('.tag').style.display='none'
    // },3000)
</script>

<div class="index start">
   <header>
    <h1 class="title">{title}</h1>
    <p class="sub-title">Recommended based your interests</p>
   </header>
    <div class="blog-tag">
        {#if data.data}
            {#each data.data as item}
            <a href={`/blogs/${item.id}`} class="blog-item">
                <div class="blog-title">
                     <!-- svelte-ignore a11y-img-redundant-alt -->
                     <a href={item.image}><img src={item.image} alt="blog image"/></a>
                     <p>{item.title}</p>
                </div>
                 <p class="snippet">{item.snippet}</p>
             </a>
            {/each}
        {:else}
            <div class="tag">
                <p class="error">{data.error}</p>
            </div>
        {/if}
    </div>
</div>
