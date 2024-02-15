<style>
    @keyframes moveCircle {
        0% {
            transform: translateX(-10vw);
        }
        50% {
            transform: translateX(10vw);
        }
        100% {
            transform: translateX(-10vw);
        }
    }
</style>

<script>
    import "../app.css";
</script>
<main class="grow h-screen flex flex-col justify-center items-center w-screen bg-[#eeeeee] relative z-[1] overflow-hidden">
    <div class="bg-[#fab550] rounded-full h-[30vw] w-[30vw] absolute z-[-2] top-[20vw] left-[-10vw]"></div>
    <div class="bg-[#2f4159] rounded-full h-[30vw] w-[30vw] absolute z-[-3] top-[-5vw] left-[80vw]"></div>
    <slot class="" />
</main>
