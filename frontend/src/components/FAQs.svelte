<script>
    import SectionWrapper from "./SectionWrapper.svelte";
    let faqs = [
    {
        question: "What is Bookease?",
        ans: "Bookease is a revolutionary platform that simplifies the process of booking celebrities for your events. Whether you're planning a corporate function, charity gala, or private party, Bookease provides access to a wide range of celebrity talent to elevate your event to the next level."
    },
    {
        question: "How do I use Bookease?",
        ans: "Using Bookease is easy! Simply sign up for an account on our website, browse through our extensive database of celebrities, and select the ones you're interested in booking for your event. Our user-friendly platform guides you through the booking process, allowing you to communicate directly with agents and finalize the details seamlessly."
    },
    {
        question: "Is Bookease available worldwide?",
        ans: "Yes, Bookease caters to clients globally. Whether you're located in New York, London, Tokyo, or anywhere else in the world, you can access our platform and book celebrities for your events with ease."
    },
    {
        question: "What types of celebrities can I book through Bookease?",
        ans: "Bookease offers a diverse selection of celebrities from various industries, including film, music, sports, television, and more. Whether you're looking to book A-list actors, chart-topping musicians, renowned athletes, or popular influencers, you'll find them all on Bookease."
    },
    {
        question: "Can I request specific celebrities who are not listed on Bookease?",
        ans: "Absolutely! If you have a specific celebrity in mind who is not listed on our platform, you can submit a request, and our team will work tirelessly to fulfill your request and secure the talent for your event."
    },
    {
        question: "How much does it cost to book a celebrity through Bookease?",
        ans: "The cost of booking a celebrity through Bookease varies depending on factors such as the celebrity's popularity, availability, and the nature of your event. We offer transparent pricing and work with you to find a package that fits your budget and requirements."
    },
    {
        question: "Can I view testimonials from previous clients who have used Bookease?",
        ans: "Yes, we showcase testimonials from satisfied clients on our website. You can read firsthand accounts of their experiences working with Bookease and how booking celebrities through our platform has made their events unforgettable."
    },
    {
        question: "Is there customer support available if I have questions or need assistance?",
        ans: "Absolutely! Our dedicated customer support team is here to assist you every step of the way. Whether you have questions about the booking process, need help selecting the right celebrity for your event, or require assistance with logistics, we're here to help. Simply reach out to us via email or phone, and we'll ensure that your experience with Bookease is smooth and seamless."
    }
];

</script>

<SectionWrapper id="faqs">
    <div
        class="flex flex-col gap-10 sm:gap-14 md:gap-24 py-20 flex-1 items-center justify-center"
    >
        <div class="flex flex-col gap-2">
            <p class="opacity-60 text-base sm:text-lg md:text-xl text-center">
                For all your questions, qualms & queries
            </p>
            <h3
                class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center"
            >
                Frequently Asked Questions
            </h3>
        </div>
        <div class="flex flex-col gap-8 sm:gap-10 md:gap-14 w-full">
            {#each faqs as faq}
                <div
                    class="flex flex-col gap-2 text-left max-w-[800px] w-full mx-auto relative p-4 px-6"
                >
                    <div
                        class="absolute top-0 left-0 w-1/3 h-[1px] bg-slate-950 -translate-x-4"
                    ></div>
                    <div
                        class="absolute top-0 left-0 h-2/3 w-[1px] bg-slate-950 -translate-y-4"
                    ></div>
                    <h4 class="text-lg sm:text-xl md:text-2xl pt-2">
                        {faq.question}
                    </h4>
                    <p class="pl-2">{faq.ans}</p>
                </div>
            {/each}
        </div>
    </div>
</SectionWrapper>
