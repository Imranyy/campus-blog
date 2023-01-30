<script>

    let title=`Welcome to campus blog`
    const updateTitle=()=>{
        title=`Hello campus people`
    }
</script>

<div class="index">
    <h1 class="title">{title}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, fuga quos. Placeat magnam dolor officia consequatur dicta accusamus ab reiciendis iste, impedit sunt, nobis, repudiandae sed aut voluptatem delectus blanditiis.</p>
    <button on:click={updateTitle}>Update Title</button>
    <input type="text" bind:value={title} name="" id=""/>
    <a href="/about">about <i class="fa fa-user"></i></a>
</div>
