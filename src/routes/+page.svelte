<script>
    /** @type {import('./$types').PageData} */
     export let data;

    let title=`For you`
</script>

<div class="index start">
    <h1 class="title">{title}</h1>
    <p class="sub-title">Recommended based your interests</p>
    <ul>
        {#if data.data}
            {#each data.data as item}
                <li>{item.name}</li>
            {/each}
        {:else}
        <div class="tag">
            <p class="error">{data.error}</p>
        </div>
        {/if}
    </ul>
    <div class="blog-tag">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, fuga quos. Placeat magnam dolor officia consequatur dicta accusamus ab reiciendis iste, impedit sunt, nobis, repudiandae sed aut voluptatem delectus blanditiis.</p>
    </div>
    <div class="blog-tag">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, fuga quos. Placeat magnam dolor officia consequatur dicta accusamus ab reiciendis iste, impedit sunt, nobis, repudiandae sed aut voluptatem delectus blanditiis.</p>
    </div>
    <div class="blog-tag">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, fuga quos. Placeat magnam dolor officia consequatur dicta accusamus ab reiciendis iste, impedit sunt, nobis, repudiandae sed aut voluptatem delectus blanditiis.</p>
    </div>
    <div class="blog-tag">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, fuga quos. Placeat magnam dolor officia consequatur dicta accusamus ab reiciendis iste, impedit sunt, nobis, repudiandae sed aut voluptatem delectus blanditiis.</p>
    </div>
    <div class="blog-tag">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, fuga quos. Placeat magnam dolor officia consequatur dicta accusamus ab reiciendis iste, impedit sunt, nobis, repudiandae sed aut voluptatem delectus blanditiis.</p>
    </div>
    <div class="blog-tag">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, fuga quos. Placeat magnam dolor officia consequatur dicta accusamus ab reiciendis iste, impedit sunt, nobis, repudiandae sed aut voluptatem delectus blanditiis.</p>
    </div>
    <div class="blog-tag">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, fuga quos. Placeat magnam dolor officia consequatur dicta accusamus ab reiciendis iste, impedit sunt, nobis, repudiandae sed aut voluptatem delectus blanditiis.</p>
    </div>
</div>
