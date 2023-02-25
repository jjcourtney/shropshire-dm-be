const wheelOfFutune = [
    [
        1,
        "The seashell tells you the name of someone you didn’t know wanted to kill you. If no-one qualifies then a random NPC is designated as an assassin seeking your death!",
    ],
    [2, "A gold piece falls out of the seashell"],
    [3, "A single-day-of-rations-worth of dried fish falls out of the shell"],
    [4, "A wet finger jabs you in the ear"],
    [
        5,
        "You hear whispers of a long forgotten tale. Add 1d4 to your next ability check to recall lore",
    ],
    [
        6,
        "You eavesdrop on a message/sending spell that was cast within 100 miles of you.",
    ],
    [
        7,
        "You hear an increasingly loud buzzing sound. Drop the seashell within 1d4 rounds or be attacked by a swarm of wasps",
    ],
    [
        8,
        "You take 1 point of piercing damage and receive a garish piercing that cannot be removed",
    ],
    [
        9,
        "Once per day for the rest of your life you receive a random piece of knowledge concerning owlbears",
    ],
    [
        10,
        "A hermit crab enters your ear canal. Animal Handling or Medicine DC 16 can remove it safely",
    ],
    [
        11,
        "You hear the voice of a drunken sailor who tells you the meaning of life. This process takes forever and will never truly be ended because the voice goes off on drunken tangents",
    ],
    [12, "A song becomes stuck in your head for 24 hours"],
    [
        13,
        "For two rounds you hear the sea before being struck by a jet of water (as if by the create water spell)",
    ],
    [
        14,
        "The shell sticks to your face for 1 week and cannot be removed except via a Wish spell",
    ],
    [15, "The shell moves to your other hand"],
    [
        16,
        "You hear nothing. After you remove the shell the speech of other people around you is replaced by fish/ocean puns.",
    ],
    [
        17,
        "The shell amplifies your voice for as long as you hold it to your head.",
    ],
    [18, "The shell casts thunderwave"],
    [
        19,
        "You hear the sound of wondrous song. When you remove the shell you feel an irresistible urge to go into water, especially the ocean.",
    ],
    [
        20,
        "You can breathe underwater and swim up to your speed for the next year",
    ],
    [21, "You learn the language aquan permanently"],
    [
        22,
        "When performing sea shanties you add twice your proficiency to performance checks",
    ],
    [
        23,
        "The shell whispers the location of an underwater treasure trove (20% chance the shell omits the presence of a terrible guardian)",
    ],
    [
        24,
        "You gain a spectral shell, granting +2 to AC until you take 3 critical hits.",
    ],
    [
        25,
        "The shell teaches you a story of adventure on the sea. If you recite that tale all creatures that can hear you must make a Wis save or be charmed by you for 1 hour.",
    ],
    [26, "The shell tells you something that cheers you up."],
    [27, "You can drink salt water without penalty for a year"],
    [
        28,
        "The shell promises to grant three wishes. It grants one of them at random.",
    ],
    [
        29,
        "The shell whispers in a wise old voice, and will answer any three questions in a cryptic fashion.",
    ],
    [
        30,
        "A kraken becomes aware of your presence and your use of the shell. It is now your most hated enemy and will attack you if you venture out to sea. You are both aware of this vendetta.",
    ],
    [31, "You are teleported to a random location within a body of salt water."],
    [
        32,
        "The next time you look directly at the full moon you are transformed into a moray eel.",
    ],
    [33, "A net shoots from the shell and entangles you"],
    [34, "You smell strongly of fish for 1d4 days"],
    [35, "All of your belongings are now filled with sand"],
    [
        36,
        "You become the next prophet/sacrifice to Dagon. The nearest high-priest is aware of your location",
    ],
    [37, "Gain a level of Warlock devoted to an Elder One"],
    [
        38,
        "You transform into a creature of the sea: 25% merfolk, 25% sahuagin, 25% kuo toa, 25% just a fish",
    ],
    [39, "You gain a penguin as a permanent animal companion"],
    [
        40,
        "A random item in your possession gains one random ability of the shell. It will also vanish when used.",
    ],
    [
        41,
        "The shell becomes Mordenkainen's Magnificent Mansion. Once the spell is over it vanishes",
    ],
    [42, "You gain protection from seagulls"],
    [
        43,
        "Once you can call upon a flock of 2d6 sirens, they will aid you one time before never seeing you again (or 50% chance they adopt you and you are never seen again)",
    ],
    [
        44,
        "You gain access to a bounty of seafood that emerges from any item you reach into",
    ],
    [45, "You add 1d4 to Survival checks when fishing"],
    [
        46,
        "The shell illuminate for 24 hours and cannot be extinguished or stifled in any way",
    ],
    [
        47,
        "You are fully aware of your location and direction when travelling by sea.",
    ],
    [48, "Turns into a portal to the plane of water"],
    [49, "Turns into a large boat"],
    [
        50,
        "Turns into walrus who will advise on further actions as if via the augury spell",
    ],
    [51, "For the next 24 hours everything feels slightly damp"],
    [
        52,
        "The shell turns into a whale. If you can return that whale to the ocean within 24 hours it will grant you one wish",
    ],
    [53, "Sends a flare into the sky at your location"],
    [54, "Spits 1d100 pearls"],
    [
        55,
        "Spits out a magical trident (+2 to attack and damage) makes an attack against you at +6 to hit.",
    ],
    [
        56,
        "The shell rises into the air taking you with it and deposits you at the place you most want to be",
    ],
    [57, "The shell vanishes and is replaced by an Ioun stone (random)"],
    [
        58,
        "The shell becomes an anchor, which functions as a +1 warhammer that requires Str 17+ to wield",
    ],
    [
        59,
        "Your hands become crustacean claws. They are natural weapons +2 to attack and damage, 1d8 slashing and grapple automatically on a hit. You cannot use them as normal hands anymore (Wish to reverse)",
    ],
    [60, "A random food vendor appears within 100ft."],
    [
        61,
        "Everything tastes like salt. At the end of the day gain 1 level of exhaustion either from dehydration or refusing to eat salty food.",
    ],
    [62, "The shell grows spines. You take 1 damage"],
    [
        63,
        "Your eyes grow out onto stalks and you can now perceive in 12 colours. You permanently detect magic and good or evil.",
    ],
    [64, "A random object on your person becomes limp"],
    [
        65,
        "You gain cephalopod-like skin, and can naturally camouflage yourself. You have advantage on Stealth checks while remaining still",
    ],
    [66, "You gain tremorsense"],
    [67, "You can walk on water for 1 year."],
    [
        68,
        "You gain the cantrip dancing lights. If a creature can see the lights but cannot see you it must succeed on a Wis save or be compelled to follow the lights in a direction of your choosing.",
    ],
    [
        69,
        "You can flatten your body to a width of 1 inch for 1 minute whenever you wish. 5% chance each time that you will resize before you are ready, and lose this ability permanently",
    ],
    [
        70,
        "You become possessed by the ghost of a pirate captain, he will lead you to treasure buried on a distant island, whereupon he will attempt to kill you and bury you with his hoard.",
    ],
    [
        71,
        "The next time you travel by sea the boat you are in will shatter and sink",
    ],
    [
        72,
        "Naked flames within 30ft. of you are doused as if by water for the next month",
    ],
    [
        73,
        "You absorb water. Whenever you are submerged your weight triples. One gallon of water can sustain you for 1 month.",
    ],
    [74, "You gain the cantrip shocking grasp"],
    [
        75,
        "1/week you can enlarge yourself as if via the Enlarge/Reduce spell. 3 days later you are reduced for 1 hour.",
    ],
    [76, "Water within 100ft of you turns red for the next 1d6 months"],
    [
        77,
        "Your nose transforms into that of a swordfish. You can attack with it as a bonus action 1/encounter (shortsword)",
    ],
    [
        78,
        "Your head becomes that of a hammerhead shark. You gain proficiency in smithing tools",
    ],
    [
        79,
        "You gain long poisonous quills. A creature that attempts to swallow you or grapple you takes 2d8 poison damage.",
    ],
    [80, "The lower half of your face grows tentacles"],
    [
        81,
        "You spit black ink from your mouth. 1/day you can use it to cast Fog Cloud except that the fog is black.",
    ],
    [82, "You grow barnacles, your swimming speed is reduced by 5ft."],
    [
        83,
        "You can see through organic shells and carapaces. You score a critical hit against creatures with natural armour on a roll of 19 or 20",
    ],
    [84, "A map falls out of the shell for no ocean you recognise"],
    [
        85,
        "A compass falls out of the shell with a ring of engraved constellations. You can set the compass to follow that constellation.",
    ],
    [86, "A key falls out of the shell for a lock you are destined to discover"],
    [
        87,
        "You believe 2d8x50GP worth of gems fall out of the shell, instead you have a large collection of useless glass",
    ],
    [88, "One of your possessions falls out of the shell"],
    [
        89,
        "Your skin gains the colouration of nacre. You have advantage on saving throws against spells",
    ],
    [
        90,
        "A voice from deep within the shell screams a warning about something about to attack. When you look, the shell laughs and vanishes",
    ],
    [91, "The shell drops a love letter"],
    [
        92,
        "The shell drops a pair of dice, one lands on 6s twice as often, the other lands on 1s",
    ],
    [93, "You gain a fanciful hat"],
    [94, "You gain the animosity of a seagull"],
    [
        95,
        "A parrot appears on your opposite shoulder. It will prove to be an invaluable if infuriating companion (raven stats, with Keen Mind feat)",
    ],
    [
        96,
        "A spectral fish orbits you. It can only be seen by you or creatures with truesight",
    ],
    [
        97,
        "You gain the trust of a dragon. 40% blue, 40% bronze, 20% dragonturtle",
    ],
    [
        98,
        "An awakened plesiosaur will follow you any time you travel by water and ask for 3 gold and fifty silver. If you give it the money it will reappear in various convincing disguises in unpredictable locations with the same request.",
    ],
    [
        99,
        "You can burrow up to 10ft in sand. While submerged you have advantage on attack rolls against creatures above you.",
    ],
    [100, "Roll twice"],
];
