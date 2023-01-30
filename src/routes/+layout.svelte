<script>
  import Nav from "$lib/nav.svelte";
  import '../css/style.css'
  import '../css/responsive.css'

</script>

<header>
    <Nav brand="Campus blogs"/>
</header>
<main>
    <!-- page content -->
    <slot></slot>
</main>
<footer>
    <p>&COPY; Campus Blog 2023</p>
</footer>
