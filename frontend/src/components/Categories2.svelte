<script>
    import ProductCard from "./CategoriesCard.svelte";
    import SectionWrapper from "./SectionWrapper.svelte";
    let productFeatures = [
        {
            featureList: [
                "Explore our talented roster of artists.",
                "Select your preferred date for the event.",
                "Pick the perfect venue that suits your event's vibe.",
                "Secure your booking by making a payment.",
                
            ],
            description:
                "Discover and book an exceptional music artist today!",
            imgUrl: "assets/singing.png",
        }
    ];
</script>

<SectionWrapper id="product">
    <div
        class="flex flex-col gap-10 sm:gap-14 md:gap-24 flex-1 items-center justify-center pb-10 md:pb-14"
    >
        <div class="flex flex-col gap-2">
            
            <h3
                class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center" id = "categs"
            >
                Our Categories
            </h3>
        </div>

        {#each productFeatures as productFeature, index}
            <ProductCard {productFeature} {index}>
                {#if index === 0}
                Harmonize Your Soul: Music that <span
                        class="text-indigo-400 font-medium">moves</span
                    > you
                {:else if index === 1}
                Let Your Spirit Soar: Dance to the <span
                        class="text-indigo-400 font-medium">Melody</span
                    > of life
                {:else}
                Laugh Out Loud: Where Humor Takes <span
                        class="text-indigo-400 font-medium">center</span
                    >
                    stage
                    
                {/if}
            </ProductCard>
        {/each}
    </div>
</SectionWrapper>
<style>
#categs{
    margin-top: 50px;
}
    </style>