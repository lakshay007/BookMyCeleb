<script>
  import '../app.css'
  import { onMount } from 'svelte';
  
  let handlesignout = async() => {
     localStorage.removeItem("username");
     window.location.href = "http://localhost:5173/"
 }
  
</script>

<main>
  <div class="navbar bg-white-100 px-10 flex justify-between"> <!-- Added justify-between -->
      <div class="navbar-start">
          <div class="dropdown">
              <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white-100 rounded-box w-52">
                  <li><a>About us</a></li>
                  <li>
                      <a>Profile</a>
                      <ul class="p-2">
                          <li><a>My profile</a></li>
                          <li><a href="#" on:click={handlesignout}>Sign out</a></li>
                      </ul>
                  </li>
                  <li><a>Dashboard</a></li>
              </ul>
          </div>
          <a href='/homepage' class="btn btn-ghost text-xl">BookEase</a>
      </div>
      <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-40">
              <li><a on:click = {handlesignout}>Sign Out</a></li>
              <li><a href = '/help'>Chatbot help</a></li>
              <li><a href = '/celebs'>Booking</a></li>
          </ul>
      </div>
  </div>
</main>
