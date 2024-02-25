<script>
    let API_URL = "http://localhost:5000/"
let useralready = 0;
let usersuccess = 0;
let passwordauth = 0;
let uusername,passwordd;
const handleSubmit = async(event)=>{
    const data = {
        username: uusername,
        password: passwordd
    }
   console.log(data);
   console.log(JSON.stringify(data));
    const check = await fetch(API_URL + "UserData/" + data.username)
    let ans = await check.json();
    console.log(ans);
    if(ans==null){
    //    document.cookie = "name=" +data.username+ "; SameSite=None; Secure";
    localStorage.setItem("username", data.username);
        const response = await fetch(API_URL+"UserData",{
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
});
useralready = 0;
usersuccess = 1;
setTimeout(5000);
window.location.href = '/homepage'
    }
    else{
        useralready = 1;
    }

  console.log(dataaa);
}
let handlelogin = async()=>{
    const data = {
        username: uusername,
        password: passwordd
    }
    const check = await fetch(API_URL + "UserData/" + data.username)
    let ans = await check.json();
    console.log(ans);
    console.log(ans[0].PASSWORD)
    let fetchedpass = ans[0].PASSWORD
    if(ans == null){
        passwordauth = -2;
    }
   else if(fetchedpass===data.password){
        console.log("sign in successful")
        //document.cookie = "name=" +data.username+ "; SameSite=None; Secure";
        localStorage.setItem("username", data.username);
        passwordauth = 1;
        window.location.href = '/homepage'
    }
    else{
        passwordauth = -1;
    }

}
</script>
<main class="flex flex-row grow h-full w-full justify-around items-center rounded-3xl">
    <div class=" grow h-full w-1/2 flex flex-col justify-center items-center gap-y-10 bg-[#eeeeee]">
        <div class="text-4xl font-semibold">
            LOGIN
        </div>
        <div class="flex flex-col gap-y-2.5">
            <p class="label-text text-base">Username</p>
            <input bind:value={uusername} type="text" placeholder="Type here" class="input input-bordered input-primary w-[25vw] bg-sky-500/[.06]"/>
        </div>
        <div class=" flex flex-col gap-y-2.5">
            <p class="label-text text-base">Password </p>
            <input bind:value={passwordd} type="password" placeholder="Type here" class="input input-bordered input-primary w-[25vw] bg-sky-500/[.06]"/>
        </div>
        <button on:click={handlelogin} class="btn btn-primary w-[25vw] bg-[#2f4159] text-white border-0"> SIGN IN </button>
        <div>
            {#if useralready == 1}
            
            <h1>username is already in use</h1>
            {/if}
            {#if usersuccess == 1}
            <h1>user successfully created,redirecting to homepage</h1>
            {/if}
            {#if passwordauth == -1}
            <p>wrong password, please try again</p>
        
            {:else if passwordauth == -2}
            <p>user is not registered, please sign up</p>
            {/if}
        </div>
    </div>
    <div class="grow h-full w-1/2 flex justify-center items-center rounded-r-2xl bg-white ">
        <img src="/src/assets/health-doctor-vaccine.png" />
    </div>
</main>