<script>
    /** @type {import('./$types').PageData} */
     export let data;

    let title=`For you`
</script>

<div class="index start">
    <h1 class="title">{title}</h1>
    <h3>list</h3>
    <ul>
        {#if data.data}
            {#each data.data as item}
                <li>{item.name}</li>
            {/each}
        {:else}
            <p>{data.error}</p>
        {/if}
    </ul>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, fuga quos. Placeat magnam dolor officia consequatur dicta accusamus ab reiciendis iste, impedit sunt, nobis, repudiandae sed aut voluptatem delectus blanditiis.</p>
    <a href="/about">about <i class="fa fa-user"></i></a>
</div>
