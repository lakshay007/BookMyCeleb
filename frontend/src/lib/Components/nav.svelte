<script>
    import '../../app.css'
    let handlesignout = async()=>{
       localStorage.removeItem("username");
       window.location.href = 'http://localhost:5173/'

   }
   </script>
<main>
<div class="navbar bg-base-100 px-10">
   <div class="navbar-start">
     <div class="dropdown">
       <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
       </div>
       <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
         <li><a>About us</a></li>
         <li>
           <a>Profile</a>
           <ul class="p-2">
             <li><a>My profile</a></li>
             <li><a on:click={handlesignout}>Sign out</a></li>
           </ul>
         </li>
         <li><a>Dashboard</a></li>
       </ul>
     </div>
     <a href='/homepage' class="btn btn-ghost text-xl">AgeEase</a>
   </div>
   <div class="navbar-center hidden lg:flex">
     <ul class="menu menu-horizontal px-1">
       <li><a href = '/community'>Community</a></li>
       <li><a href = '/medicinetracker'>Medicine Tracker</a></li>
       <li><a href = '/doctorappnt'>Virtual Doctor Appointment</a></li>
       <li><a href = '/help'>Chatbot help</a></li>
       <li>
         <details>
           <summary>Profile</summary>
           <ul class="p-2">
             <li><a href = '/homepage' >My profile</a></li>
             <li><a on:click={handlesignout}>Sign out</a></li>
           </ul>
         </details>
       </li>
     </ul>
   </div>
   <div id = "google_translate_element" class="flex flex-row justify-center items-center"></div>
  <script src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
  <script>
   function googleTranslateElementInit(){
     new google.translate.TranslateElement(
       {pageLanguage: 'en'},
       'google_translate_element'
     );
   }
   </script>
 </div>
</main>