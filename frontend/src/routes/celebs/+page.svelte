<script>
    import { onMount } from 'svelte';
    import Nav from "../../components/Nav.svelte";
    let datee;
   
	
	let date = new Date()
    let value  = 100000;
    let budget;
    let API_URL = "http://localhost:4000/";
    let dropdownVisible = false;
    let stars = 2;
    let celebs = [];
    let artistname;
    onMount(async () => {
        const check = await fetch(API_URL + "Celebs");
        let ans = await check.json();   
        celebs = ans;
        console.log(stars);
        
    });
    


    function toggleDropdown() {
        dropdownVisible = !dropdownVisible;
    }

    let showCelebs = async (category) => {
        const check = await fetch(API_URL + "Categories/" + category);
        let ans = await check.json();
        celebs = ans; 
    }
    let searchbyname = async () => {
        const check = await fetch(API_URL + "Celebs/" + artistname);
        let ans = await check.json();
        celebs = ans; 
    }
    let handlestars = async(value) => {
        stars = value;
       const check = await fetch(API_URL + "Celebs/Rating/" + value);
        let ans = await check.json();
        celebs = ans;
    }
    let clearstars = async() => {
        artistname = "";
        stars = 3;
        const check = await fetch(API_URL + "Celebs");
        let ans = await check.json();   
        celebs = ans;
        datee = "";
    }
    let handleOnChange = async(event) => {
        budget = event.target.value;
        if(budget!=4100000){
         const check = await fetch(API_URL + "Celebs/Budget/" + (budget-100000));
         let ans = await check.json();
         celebs = ans;
        }
        else{
            const check = await fetch(API_URL + "Celebs");
        let ans = await check.json();   
        celebs = ans;
        }
        console.log(budget);
    }
    let searchbydate = async() => {
        console.log(datee);
        const check = await fetch(API_URL + "Celebs/date/" + datee);
        let ans = await check.json();
        celebs = ans;
    }
    let handlebooking = async(username) => {
        window.location.href = 'http://localhost:5173/celebs/'+username;
    }

</script>

<main>
    
    <Nav />

    <div class="min-h-screen bg-gray-100 flex px-0 ">
        <!-- Sidebar -->
        <div class="w-64 bg-white shadow-lg">
            <!-- Sidebar content goes here -->
            <div class="p-4">
                <h2 class="text-xl font-semibold mb-4">Budget</h2>
                <input  type="range" min="100000" max="4100000" bind:value class="range" step="1000000" on:change={handleOnChange} />
                <div class="w-full flex justify-between text-xs px-2">
                    <span>1L</span>
                    <span>10L</span>
                    <span>20L</span>
                    <span>30L</span>
                    <span>40L+</span>
                </div>
            </div>
            <div class="p-4">
                <h2 class="text-xl font-semibold mb-4">Rating</h2>
                <div class="rating">
                    <input on:click={() => handlestars(1)} checked={stars===1} type="radio" name="rating" class="mask mask-star-2 bg-orange-400" />
                    <input on:click={() => handlestars(2)} checked={stars===2} type="radio" name="rating" class="mask mask-star-2 bg-orange-400" />
                    <input on:click={() => handlestars(3)} checked={stars===3} type="radio" name="rating" class="mask mask-star-2 bg-orange-400" />
                    <input on:click={() => handlestars(4)} checked={stars===4} type="radio" name="rating" class="mask mask-star-2 bg-orange-400" />
                    <input on:click={() => handlestars(5)} checked={stars===5} type="radio" name="rating" class="mask mask-star-2 bg-orange-400" />
                    <button on:click = {clearstars} class="btn btn-xs btn-ghost">Clear Filter</button>
                </div>
                
            </div>
           
        </div>

        <!-- Main content -->
        <div class="flex-1 space-y-10 ml-4">
            <div class="mt-8 flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
                <div class="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input bind:value = {artistname} class="bg-gray-100 outline-none" type="text" placeholder="Artist name or keyword" />
                </div>
                <div class="relative">
                    <div class="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer" on:click={toggleDropdown}>
                        <span>All categories</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    <div class="{dropdownVisible ? 'block' : 'hidden'} absolute top-12 left-0 bg-white shadow-lg rounded-lg">
                        <div class="py-1">
                            <!-- Dropdown options -->
                            <div on:click={() => showCelebs('music')} class="px-4 py-2 cursor-pointer hover:bg-gray-200">Music</div>
                            <div on:click={() => showCelebs('dance')} class="px-4 py-2 cursor-pointer hover:bg-gray-200">Dance</div>
                            <div on:click={() => showCelebs('comedy')} class="px-4 py-2 cursor-pointer hover:bg-gray-200">Comedy</div>
                        </div>
                    </div>
                </div>
                
                <div class="bg-red-600 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
                    <span on:click = {searchbyname}>Search</span>
                </div>
                <div>
                    <input bind:value={datee} type="date" style="background-color: white;" />
                </div>
  
                <div class="bg-red-600 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
                    <span on:click = {searchbydate}>Search by date</span>
                </div>
                <div class="bg-red-600 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
                    <span on:click = {clearstars}>Clear</span>
                </div>
                

            </div>
            <div class="grid grid-cols-3 gap-4 mt-16 py-8">
            {#each celebs as celeb}
                <div class="card card-compact w-96 bg-white-100 shadow-xl">
                    <figure><img src='../assets/{celeb.image}.png' alt={celeb.name} /></figure>
                    <div class="card-body">
                      <h2 class="card-title">{celeb.name}</h2>
                      <p class="font-sans text-xl">{celeb.description}</p>
                      <div class="card-actions justify-end">
                        <button on:click={handlebooking(celeb.username)} class="btn btn-primary">View Details</button>
                      </div>
                    </div>
                </div>
            {/each}
            </div>
        </div>
        
    </div>
    
    
</main>
