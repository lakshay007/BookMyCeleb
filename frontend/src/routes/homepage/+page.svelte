<script>
   import Categories from "../../components/Categories.svelte";
   import Nav from "../../components/Nav.svelte";
   import { onMount } from 'svelte';
   let username;
   onMount(async () => {
   username = localStorage.getItem("username");
    });
   
</script>
<main>
    
    <Nav />
    <Categories />;
   
</main>
<style>

</style>



