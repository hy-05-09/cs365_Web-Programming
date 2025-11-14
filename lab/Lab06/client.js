
Vue.createApp({
    data() {
        return {
            currentCharacter : null,
            characters : [
                {name: "Creeper", src: "assets/creeperIcon.png", webp: "assets/creeper.webp", behavior:"Hostile 😡", health:"Health: ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️", description:"Creepers are a hostile mob that naturally spawns in the overworld.  Rather than making melee or ranged attacks, the creeper quietly walks up to the player and explodes, damaging nearby players, mobs, and blocks.  Creepers often drop gunpowder when killed.",  selected: false},
                {name: "Skeleton", src: "assets/skeletonIcon.png", webp: "assets/skeleton.webp", behavior:"Hostile 😡", health:"Health: ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️", description:"Skeletons go after players with ranged attacks (bow and arrow).  Their pathfinding algorithm is capable of traversing stairs, ladders, and mazes.  Wolves will attempt to chase off and kill skeletons on sight.  A skeleton exposed to direct daylight will combust in flames.", selected:false},
                {name: "Pig", src: "assets/pigIcon.png", webp: "assets/pig.webp", behavior:"Passive 😰", health:"Health: ❤️❤️❤️❤️❤️", description:"Pigs appear in various biomes of the overworld and know to avoid simple hazards.  As a passive mob, pigs will not attack players and will run around randomly for a short time after recieving damage.  Pigs are a good source of meat and can be bred by feeding carrots to two nearby specimens.", selected:false},
                {name: "Llama", src: "assets/llamaIcon.png", webp: "assets/llama.webp", behavior:"Neutral 😑", health:"Health: ❤️❤️❤️❤️❤️❤️❤️🤍", description:"Unlike horses, llamas cannot be saddled and directly controlled, but a player can place a rug on its back.  However, llamas can be moved around using leads.  Llamas often appear with a wandering trader.  As a neutral mob, llamas will not attack unprovoked, but will spit in self defense causing a half-heart of damage.", selected:false}
            ]
        };
    },
    methods: {
        togleAll(clicked){
            this.characters.forEach((c,i) => {
                c.selected = (i==clicked);
            });

            this.currentCharacter = this.characters[clicked];
        }
    },
    computed: {
    }
}).mount('#app');