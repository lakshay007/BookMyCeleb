<script>
    import Nav from '../../components/Nav.svelte'
    import '../../app.css'
    import { onMount } from 'svelte';
    import OpenAI from 'openai';
    let recognition
    let transcript;
    let vc;
    let handlehelp;
    let question = '';
    let speech;
    let res ;
    let loaded
    const PUBLIC_API_KEY = "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";
    onMount(async () => {
        document.getElementById("p").style.display = "none";
        try {
            const openai = new OpenAI({
                apiKey: PUBLIC_API_KEY,
                dangerouslyAllowBrowser: true 
            });
            
            handlehelp = async () => {
                loaded = false
                
                speech = false;
                
                
                
                const chatCompletion = await openai.chat.completions.create({
                    model: "gpt-3.5-turbo",
                    messages: [{"role": "user", "content": question}],
                });
                res = await chatCompletion.choices[0].message
                console.log(chatCompletion.choices[0].message);
                loaded = true
            }
        } catch (er) {
            console.log(er);
        }
        
        vc = () => {
         
            speech = true;
            window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
             recognition = new SpeechRecognition();
            recognition.interimResults = true;
            const words = document.querySelector('.words');
            const p = document.getElementById("p");
            
            words.appendChild(p);
            
            recognition.addEventListener('result', e => {
                transcript = Array.from(e.results)
                    .map(result => result[0])
                    .map(result => result.transcript)
                    .join('');
                
                p.innerHTML = transcript;
                question = transcript
                console.log(transcript);
            });
            
            recognition.addEventListener('end', () => {
                if (speech) {
                    recognition.start();
                }
            });
            
            if (speech == true) {
                recognition.start();
            }
        }
    })
</script>

<main class="h-full w-full flex flex-col">
    <Nav class="rounded-3xl" />
    <div class="grow h-full w-full rounded-b-3xl flex flex-row justify-around items-center">
        <div class="grow h-full w-1/2 rounded-b-3xl flex flex-col justify-center items-center">
                <div class=" flex flex-col justify-center items-center gap-y-5">
                    <div class="text-5xl">Ask about a Celeb!</div>
                    <input bind:value={question} type="text" placeholder="Type here" class="input input-bordered input-white text-white w-[25vw]"/>
                    <button on:click={handlehelp} class="btn btn-primary w-[25vw] bg-[#2f4159] text-white border-0">Ask</button>
                    <button on:click={vc} class="btn btn-primary w-[25vw] bg-[#2f4159] text-white border-0">Voice</button>
                </div>
                <div class=" words flex flex-col justify-center items-center gap-3 m-5" contenteditable>
                    <p id="p"></p>

                    <div class="flex flex-row justify-center items-center">
                        {#if loaded} 
                        <div class="w-[35vw] h-[20vh] overflow-y-scroll bg-white rounded-xl">
                        <p class="text-lg semibold m-5"> {res.content} </p>
                        </div>
                        {:else if loaded === false}
                        <div class="flex flex-row gap-3 items-center justify-center">
                        <p class="text-lg">Loading</p>
                        <span class="loading loading-spinner loading-lg"></span>
                        </div>
                        {:else}
                        {/if}
                    </div>
                </div>
        </div>
        
    </div>
</main>

<style>

</style>
