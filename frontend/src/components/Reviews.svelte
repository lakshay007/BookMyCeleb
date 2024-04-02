<script>
    import ReviewCard from "./ReviewCard.svelte";
    import SectionWrapper from "./SectionWrapper.svelte";
    import Stars from "./Stars.svelte";

    let lim = true;

    let reviewsList = [
        {
            name: "Sanjay Sharma",
            review: "Bookease has transformed the way I plan events! As an event organizer, securing celebrity appearances used to be a daunting task, but with Bookease, it's become a breeze. The platform's user-friendly interface and extensive celebrity database make finding and booking talent effortless. Highly recommend!",
            features: [
                "effortless booking",
                "Good pricing",
            ],
        },
        {
            name: "Abhishek Gupta",
            review: "I've been in the entertainment industry for years, and I can confidently say that Bookease is a game-changer. Whether it's for corporate events or private parties, Bookease streamlines the celebrity booking process like never before. Plus, their team provides excellent support every step of the way. Thanks to Bookease, my events have reached new heights of success!",
            features: [
                "Good UI",
                "Saves Time",
            ],
        },
        {
            name: "Yashya Garg",
            review: "Bookease is a godsend for event planners like me! The platform offers a diverse selection of celebrities and makes it incredibly easy to browse through their profiles, check availability, and secure bookings. The transparency in pricing and seamless communication with agents ensure a stress-free experience. Thanks to Bookease, my clients are always thrilled with the star-studded lineup at their events.",
            features: [
                "Easy to navigate",
                "Great variety of celebs",
            ],
        },
        {
            name: "Shreyansh Tandon",
            review: "I've tried various celebrity booking platforms in the past, but none compare to Bookease. The platform's intuitive design and comprehensive features make it my go-to choice for securing talent for my events. From Hollywood icons to emerging stars, Bookease offers a wide range of options to suit every occasion and budget. Thanks to Bookease, I've been able to elevate the entertainment factor of my events and leave a lasting impression on guests.",
            features: [
                "Seamless process",
                "Great service",
            ],
        },
    ];
</script>

<SectionWrapper id="reviews">
    <div
        class="flex flex-col gap-10 sm:gap-14 md:gap-24 py-20 flex-1 items-center justify-center"
    >
        <div class="flex flex-col gap-2">
            <p class="opacity-60 text-base sm:text-lg md:text-xl text-center">
                Don't just take our word for it
            </p>
            <h3
                class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center"
            >
                See What <span class="text-indigo-400">Others</span> Have To Say
            </h3>
        </div>
        <div class="flex flex-col md:flex-row gap-8 w-fit mx-auto">
            <div class="flex flex-col gap-8">
                {#each lim ? reviewsList.slice(0, 4) : reviewsList as reviewItem, index}
                    <ReviewCard {reviewItem} left={true} {index} />
                {/each}
            </div>
            <div class="w-[1px] bg-slate-950 hidden md:flex"></div>
            <div class="flex flex-col gap-8">
                {#each lim ? reviewsList.slice(0, 4) : reviewsList as reviewItem, index}
                    <ReviewCard {reviewItem} {index} />
                {/each}
            </div>
        </div>
       
        <div class="flex flex-col gap-10">
            <p class="mx-auto text-lg sm:text-xl md:text-2xl font-semibold">
                Trusted by 2000+ Organizers
            </p>
            <Stars />
        </div>
    </div>
</SectionWrapper>
