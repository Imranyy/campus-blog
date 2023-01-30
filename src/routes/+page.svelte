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
    <!-- <ul>
        {#if data.data}
            {#each data.data as item}
                <li><a href={`/blogs/${item.id}`}>{item.name}</a></li>
            {/each}
        {:else}
        <div class="tag">
            <p class="error">{data.error}</p>
        </div>
        {/if}
    </ul> -->
    <div class="blog-tag">
        <a href='/' class="blog-item">
           <div class="blog-title">
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <a href="/img1.jpg"><img src='/img1.jpg' alt="blog image"/></a>
                <p>Lorem ipsum dolor sit amet consectetu</p>
           </div>
            <p class="snippet">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, fuga quos. Placeat magnam dolor officia consequatur dicta accusamus ab reiciendis iste, impedit sunt, nobis, repudiandae sed aut voluptatem delectus blanditiis.</p>
        </a>
        <a href='/' class="blog-item">
           <div class="blog-title">
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <a href="/img2.jpg"><img src='/img2.jpg' alt="blog image"/></a>
                <p>Lorem ipsum dolor sit amet consectetu</p>
           </div>
            <p class="snippet">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, fuga quos. Placeat magnam dolor officia consequatur dicta accusamus ab reiciendis iste, impedit sunt, nobis, repudiandae sed aut voluptatem delectus blanditiis.</p>
        </a>
        <a href='/' class="blog-item">
           <div class="blog-title">
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <a href="/img3.jpg"><img src='/img3.jpg' alt="blog image"/></a>
                <p>Lorem ipsum dolor sit amet consectetu</p>
           </div>
            <p class="snippet">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, fuga quos. Placeat magnam dolor officia consequatur dicta accusamus ab reiciendis iste, impedit sunt, nobis, repudiandae sed aut voluptatem delectus blanditiis.</p>
        </a>
        
    </div>
</div>
