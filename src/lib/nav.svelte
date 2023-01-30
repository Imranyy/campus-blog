<script>
     let brand=`Campus Blogs`

     const showMenu=()=>{
        // @ts-ignore
        document.querySelector('.menu-bg').style.display='block'
     }
     const closeMenu=()=>{
        // @ts-ignore
        document.querySelector('.menu-bg').style.display='none'
     }
</script>

<nav>
    <div class="nav-bar">
        <div class="nav-top">
            <a href="/" class="logo"><h2>{brand}</h2></a>
            <input type="search" name="" placeholder="&#128269;  News Feed" id=""/>
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a on:click={showMenu} href="#" class="menu-btn"><i class="fa fa-list"></i></a>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="menu-bg" on:click={closeMenu}>
                <div class="menu-list">
                    <ul role="navigation">
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <li on:click={closeMenu}><a href='/home'>Home</a></li>
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <li on:click={closeMenu}><a href='/'>For you</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="nav-links">
            <ul role="navigation">
                <li><a href="/home">Home</a></li>
                <li><a href="/">For you</a></li>
            </ul>
        </div>
    </div>
</nav>
