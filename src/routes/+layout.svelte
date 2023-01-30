<script>
  import Nav from "$lib/nav.svelte";
  import Footer from "$lib/footer.svelte";
  import '../css/style.css'
  import '../css/responsive.css'

</script>

<header>
    <Nav/>
</header>
<main>
    <!-- page content -->
    <slot></slot>
</main>
<Footer/>
