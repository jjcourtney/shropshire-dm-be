const items = [
    {
        card: "Ace",
        type: "magicItems",
        subtype: "itemsOfMagic",
        name: "A scroll",
        desc: ["Target tiny creature with intelligence 6 or lower gains 1 level in wizard. It does not change that creature's alignment, intelligence or create any special bond between you.",
        ]
    }, {
        card: "2",
        type: "magicItems",
        subtype: "itemsOfMagic",
        name: "Wand",
        desc: ["Roll 1d4 whenever you complete a long rest. You may add the result to a single ability check before you complete another long rest.",
        ]
    }, {
        card: "3",
        type: "magicItems",
        subtype: "itemsOfMagic",
        name: "Fox’s Head Consumable",
        desc: ["Fox’s Cunning, single use expendable, no need to concentrate - Has to be swallowed, requires a DC 13 Con save or gets stuck in your throat, for the duration of the spell you cannot talk, eat, or drink, and if you undertake strenuous activity you cannot breathe adequately and are poisoned.",
        ]
    }, {
        card: "4",
        type: "magicItems",
        subtype: "itemsOfMagic",
        name: "Spell book",
        desc: ["Tome of celebration, filled with magical songs and games that invigorate and cheer the soul.",
            "You gain proficiency in Performance while attuned to this book. If you spend an hour performing, up to 20 creatures who see and participate with the performance cannot be charmed or afraid or magically put to sleep for 1 week. They also gain temporary hit points equal to your level.",
            "Attunement to the book requires adding your name to the long list of former owners."
        ]
    }, {
        card: "5",
        type: "magicItems",
        subtype: "itemsOfMagic",
        name: "Rod of Unbinding",
        desc: ["Attunement by a warlock",
            "By attuning to this rod you must lose one level of warlock and gain another level in [class]",
            "You are free of your patron and retain all of your powers however you can only take another level in warlock by succeeding on a Charisma contest with your patron (Cha +10) or you can gain a feature of your level or lower from a different pact."
        ]
    }, {
        card: "6",
        type: "magicItems",
        subtype: "itemsOfMagic",
        name: "Drum of Self Congratulation",
        desc: ["The drum, when beaten, will compliment you and affirm your opinions and sense of self esteem. Once per day you may recover a spell slot of 3rd level or lower, or two uses of your bardic inspiration.",
            "You become insufferable."
        ]
    }, {
        card: "7",
        type: "magicItems",
        subtype: "itemsOfMagic",
        name: "Orb of Vampiric Renewel",
        desc: ["6 charges: Touch - target succeeds on a Con save or gains 1 level of exhaustion, if you were suffering any exhaustion you can relieve 1 level.",
        ]
    }, {
        card: "8",
        type: "magicItems",
        subtype: "itemsOfMagic",
        name: "Scroll of the skyward path",
        desc: ["The scroll unravels and stretches to a point with which you are familiar on the same plane of existence. You can walk to that location in two hours unless the journey would already be shorter. The scroll is the path for this journey and transports you overland at a height of 200ft.",
        ]
    }, {
        card: "9",
        type: "magicItems",
        subtype: "itemsOfMagic",
        name: "Staff",
        desc: ["Cast Bones of the Earth 1/day at 8th level, as a bonus action while concentrating you can increase/decrease the height of a pillar by 10ft. if that pillar has space to do so, or you can teleport between pillars.",
        ]
    }, {
        card: "10",
        type: "magicItems",
        subtype: "itemsOfMagic",
        name: "A charm that creates a lair once a day, complete with an enormous treasure trove. The lair functions the same as Mordenkainen’s Magnificent Mansion, except it is larger, does not exist in a pocket dimension, and is tied to the charm. If another creature finds the charm they will have access to the lair.",
        desc: ["When you use the charm the lair appears in full, the landscape and neighbouring structures will reshape as if it had always been there.",
        ]
    }, {
        card: "Page",
        type: "magicItems",
        subtype: "itemsOfMagic",
        name: "A spellbook",
        desc: ["You gain the ritual caster ability",
            "You gain two rituals from any class, they count as your spells.",
            "You gain a spell from each level of spell you can cast from a class of your choice, that spell is always prepared for you and does not count toward your number of prepared spells."
        ]
    }, {
        card: "Knight",
        type: "magicItems",
        subtype: "itemsOfMagic",
        name: "",
        desc: ["A set of 2d8 runes that each contain a single spell. When each one is used it loses its power, once all of the runes are used they recharge after 2d20 days.",
            "Find the path",
            "Featherfall",
            "Wind Walk",
            "Heroes Feast",
            "[something] Smite",
            "Fireball (but higher level)"
        ]
    }, {
        card: "Queen",
        type: "magicItems",
        subtype: "itemsOfMagic",
        name: "Ceremonial dagger Warlock",
        desc: ["The dagger is a focus for warlock spells.",
            "Your head is constantly surrounded by a halo of 12 butterflies",
            "Each butterfly can be transformed into its true form as an action. It remains that way for 1 hour or until slain:",
            "3x pixies",
            "3x sprites",
            "2x faerie dragons (one orange, one blue)",
            "1x eladrin of summer",
            "1x satyr",
            "1x giant eagle",
            "1x giant owl",
            "Once transformed the butterfly vanishes and reappears after 1d12 weeks."
        ]
    }, {
        card: "King",
        type: "magicItems",
        subtype: "itemsOfMagic",
        name: "A wand of pure diamond",
        desc: ["Carrying this wand grants you 1 level 10 spell slot. Once used you cannot recover the spell slot for 7 days.",
            "You can use the spell slot to use the Cleric’s Divine Intervention ability.",
            "You can use the spell slot to use the wizard’s arcane recovery feature.",

        ]
    }
    ,
    {
        card: "Ace",
        type: "magicItems",
        subtype: "cursedItems",
        name: "The Hat of Possession",
        desc: [
            "This absurd hat cannot be sold, traded with, lost, or destroyed. If it disappears, or is in any way removed from your person, it will reappear after 1d3 days on your head.",
        ]
    }, {
        card: "2",
        type: "magicItems",
        subtype: "cursedItems",
        name: "A ring of keys",
        desc: [
            "Keys that cast knock on any door. In order to cast the spell you must spend 1 minute frantically searching through the ring for the right key. The loud knocking caused by the spell is replaced by the constant jangling.",
        ]
    }, {
        card: "3",
        type: "magicItems",
        subtype: "cursedItems",
        name: "A holy figurine to a god of rest and slumber",
        desc: [
            "Each time you take a long rest roll a d20, if the result is more than the number of creatures within 20ft. of you, you do not gain the benefit of a long rest. Recover ¼ of your hit dice, and a number of spell slots equal to half your level.",
        ]
    }, {
        card: "4",
        type: "magicItems",
        subtype: "cursedItems",
        name: "A black conch",
        desc: [
            "The conch can be used to summon a whip that uses your spellcasting modifier instead of Strength or Dexterity and deals 1d8 damage",
            "3/day You can use the conch to cast Evard’s Black Tentacles or Hold Person",
            "Each night roll 1d100",
            "If the result is less than the number of times you have used the conch since the last full moon, the conch will try and drag you inside it. You must succeed on a DC 16 Strength save or be pulled into the Plane of Water."
        ]
    }, {
        card: "5",
        type: "magicItems",
        subtype: "cursedItems",
        name: "A pair of mirrors",
        desc: [
            "Allows you to cast mirror image once per day",
            "Slowly but surely you lose memories tied to those around you until after 5 uses you have forgotten someone in your party completely, after 10 uses you no longer recognise someone important from your past, and after 20 uses you forget even yourself unless you can see your own reflection."
        ]
    }, {
        card: "6",
        type: "magicItems",
        subtype: "cursedItems",
        name: "Staff",
        desc: [
            "You can spend an amount of gold to reroll a damage dice of a spell you have cast that is showing a 1. The amount is equal to the number of dice re-rolled plus the level of the spell. You can do this to any number of dice but must accept the new roll.",
            "Whenever you enter a settlement for 1 hour or more you lose the same amount of gold spent on the staff in the last month. If they cannot pay they are attacked."
        ]
    }, {
        card: "7",
        type: "magicItems",
        subtype: "cursedItems",
        name: "Guitar",
        desc: [
            "You can use the guitar to charm a creature that can see and hear you, the creature must succeed on a Wisdom save, or you can choose to snap a string to cause the creature to be charmed without a save.",
            "If you break a string to force a creature to be charmed by you, you are in turn, charmed by that creature.",
            "Strings cannot be replaced but regenerate if attuned to by another creature."
        ]
    }, {
        card: "8",
        type: "magicItems",
        subtype: "cursedItems",
        name: "Wooden Axe",
        desc: [
            "You gain proficiency in a set of artisans tools of your choice. If you spend at least 1 hour a day practicing your trade with the tools you gain a +3 bonus to attack and damage rolls with the axe.",
            "If you ever fail to practice your craft the axe deals 1d8 damage to you each time you make an attack with it, and you do not gain the bonuses to attack and damage."
        ]
    }, {
        card: "9",
        type: "magicItems",
        subtype: "cursedItems",
        name: "Ceremonial Robes",
        desc: [
            "You cast prayer of healing automatically when taking your first short rest of the day.",
            "You are blessed in between your first and second short rests.",
            "After you take a second short rest without taking a long rest, you gain no benefits of rest for 1d4 days.",
            "If you fail an ability check the robes develop a minor rip, tear, or obvious wear. If you have 10 or more tears in the robe you cannot gain any benefits and you are under the effects of Bane."
        ]
    }, {
        card: "10",
        type: "magicItems",
        subtype: "cursedItems",
        name: "Prayer Beads",
        desc: [
            "Requires Attunement by a cleric",
            "Whenever the cleric attuned to these prayer beads uses their Divine Intervention ability, the target number becomes equal to or less than twice your cleric level.",
            "If the result is greater than your cleric level the wrong god will answer and will resolve your request at terrible cost. They might leave a hostile creature behind or exact a toll in money or valuable items."
        ]
    }, {
        card: "Page",
        type: "magicItems",
        subtype: "cursedItems",
        name: "Shield",
        desc: [
            "Shield grants a +4 bonus to AC and a +2 to Dex saves",
            "When struck the shield randomly summons a creature depending on the damage type dealt. The creature will immediately attack anything within its line of sight."
        ]
    }, {
        card: "Knight",
        type: "magicItems",
        subtype: "cursedItems",
        name: "Armguards",
        desc: [
            "You gain expertise in a weapon of your choice",
            "You gain a fighting style appropriate to the weapon of your choice.",
            "You gain one Battle master combat maneuver that you can use once per short rest.",
            "You grow increasingly bored outside of combat, each day in which you do not participate in a combat encounter roll a Wisdom save DC 10 + the number of days since your last combat encounter. If you fail the save you attack the next living creature you see, and cannot stop until you or that creature dies."
        ]
    }, {
        card: "Queen",
        type: "magicItems",
        subtype: "cursedItems",
        name: "Magnificent Breastplate",
        desc: [
            "+3 Breastplate, once attuned you are immediately and irresistibly sent on a quest.",
            "Travel to the PLACE",
            "Retrieve the rest of the armour, piece by piece, infuriating being dragged to each one in turn to NO benefit.",
            "Slay the offspring of the monster that forged the armour in order to end the quest and the curse."
        ]
    }, {
        card: "King",
        type: "magicItems",
        subtype: "cursedItems",
        name: "Curse of Midas",
        desc: [
            "Any item you touch turns to gold, potentially rendering it useless.",
            "If you touch a creature, that creature must succeed on a DC 18 Charisma save or be killed and petrified, turning entirely to gold. Only a Wish spell or more powerful magic can undo the petrification but does not undo the death of that creature. Any decay that would have occurred takes place over 24 hours"
        ]
    }
    ,
    {
        card: "Ace",
        type: "magicItems",
        subtype: "itemsForCombat",
        name: "Short Sword",
        desc: ["The sword is always shiny, while you are in bright light you can spend an action shining the light into the eyes of a creature within 10ft. That creature has disadvantage on its next attack roll.",
            "Also the sword floats."
        ]
    }, {
        card: "2",
        type: "magicItems",
        subtype: "itemsForCombat",
        name: "Pair of daggers, indecision and resolution",
        desc: ["If you hit a creature with indecision, you can make an attack with resolution with disadvantage as part of the same action.",
        ]
    }, {
        card: "3",
        type: "magicItems",
        subtype: "itemsForCombat",
        name: "Hammer of Forgiveness",
        desc: ["A hammer that deals 1d8 psychic damage on a critical hit and the target is forcefully reminded of an emotional memory. If the target has an Intelligence score of 6 or higher they must succeed on a DC 12 Wisdom save or is incapacitated until the start of their next turn.",
        ]
    }, {
        card: "4",
        type: "magicItems",
        subtype: "itemsForCombat",
        name: "Net",
        desc: ["A +1 net that deals fire damage to a creature that starts its turn trapped within.",
        ]
    }, {
        card: "5",
        type: "magicItems",
        subtype: "itemsForCombat",
        name: "Medal of the last stand",
        desc: ["When you drop to 0 hit points you instead gain temporary hit points equal to your level.",
            "While you have these hit points you make attacks with advantage and attacks against you have advantage."
        ]
    }, {
        card: "6",
        type: "magicItems",
        subtype: "itemsForCombat",
        name: "Suit of travelling armour",
        desc: ["You cannot be encumbered. You can carry an amount of equipment equal to your strength score x20 and still keep your hands free. The items are stored in a precarious heap upon your back which in no way impedes your movements.",
            "Your speed while travelling overland is increased by 10 miles a day."
        ]
    }, {
        card: "7",
        type: "magicItems",
        subtype: "itemsForCombat",
        name: "Crossbow",
        desc: ["If you are hidden when you attack with this crossbow, you remain hidden from the target of your attack.",
            "1/day you can force the target to succeed on a Wisdom save or believe that they were shot by a creature of your choosing within 100ft. This save is made with advantage if the second creature does not have a bow of any kind."
        ]
    }, {
        card: "8",
        type: "magicItems",
        subtype: "itemsForCombat",
        name: "Siege equipment",
        desc: ["A mangonel constructed of bones and iron. The sight of the mangonel by a creature opposed to it and its users must succeed on a Wis save (DC 15) or be frightened by it for 1 hour.",
            "If a creature is loaded into the mangonel there is a 15% chance that the creature will become a fiend before landing. The fiend’s CR is equal to 1d6+2."
        ]
    }, {
        card: "9",
        type: "magicItems",
        subtype: "itemsForCombat",
        name: "Bugle of the Last Post",
        desc: ["Can only be played at night, summons X sword wraiths that will fight for you for 1 hour or until slain. Make a performance check, X is equal to your result - 15 (minimum of 1).",
        ]
    }, {
        card: "10",
        type: "magicItems",
        subtype: "itemsForCombat",
        name: "Flail",
        desc: ["Vorpal flail",
            "1/day A headless corpse can be reanimated by the flail as a CR 2 (or lower) undead. The raised creature has blindsight out to 60ft., is blind beyond that radius, and automatically fails Intelligence or Wisdom checks and saves.",
            "1/day you can cast speak with dead on a creature beheaded by the flail.",
            "On a natural 1 making an attack roll with this weapon you inflict double the damage of the attack to yourself."
        ]
    }, {
        card: "Page",
        type: "magicItems",
        subtype: "itemsForCombat",
        name: "Axe of the Badger",
        desc: ["+1 Axe of any type without reach",
            "You learn Dwarven and can speak, read, and write it fluently",
            "You gain proficiency in smithing tools and land vehicles.",
            "While underground you have a +2 bonus to damage rolls. You also know your depth beneath the ground at all times.",
            "You gain a burrow speed of 20ft. and can cast Shape Stone once per day."
        ]
    }, {
        card: "Knight",
        type: "magicItems",
        subtype: "itemsForCombat",
        name: "Helmet with ridiculous plume",
        desc: ["1/day use of Find Greater Steed",
            "Option, use the spell to summon a warhorse with 3 levels of Fighter (Champion), add 19 (3d10+3) HP, and 15 AC",
            "The horse has a matching ridiculous plume that blends effortlessly with its existing mane."
        ]
    }, {
        card: "Queen",
        type: "magicItems",
        subtype: "itemsForCombat",
        name: "A longbow",
        desc: ["+2",
            "This longbow is also a longsword and can be used using dexterity instead of strength.",
            "You gain the fighter’s action surge ability if you did not already have it. If you do, on your first action surge of each day you may take one additional action."
        ]
    }, {
        card: "King",
        type: "magicItems",
        subtype: "itemsForCombat",
        name: "Banner or Standard",
        desc: ["You cannot be surprised in combat.",
            "At the end of each long rest you gain a tactical advantage. This advantage can be used to gain a surprise round in a single combat even when circumstances would not allow it.",
            "Alternatively as an action you can expend the tactical advantage to place the banner, all creatures you designate have a +2 bonus to AC, Saving Throws, and Attack Rolls until the end of your next turn, or until a creature spends an action knocking down the banner."
        ]
    }
    ,
    {
        card: "Ace",
        name: "A bead",
        type: "magicItems",
        subtype: "wonderousItems",
        desc: ["You can attempt to slip this bead onto another creature. If that bead goes unnoticed for one hour then the creature’s facial expression becomes one of your choosing until sundown.",
            "If the target creature is subject to the gust of wind spell, the effect becomes permanent."
        ]
    }, {
        card: "2",
        name: "Clothing",
        type: "magicItems",
        subtype: "wonderousItems",
        desc: ["Cufflinks, you can use both hands to fiddle with/adjust your cufflinks. While doing so you have advantage on persuasion checks. This effect lasts for 1 minute total per day, and if a creature notices what you’re doing (insight check) it becomes hostile.",
        ]
    }, {
        card: "3",
        name: "Pair of Hairpins",
        type: "magicItems",
        subtype: "wonderousItems",
        desc: ["You can hear everything within 30ft. of one hairpin if you are wearing the other so long as you are within 120ft. of it.",
            "If a creature you designate wears the other hairpin you can communicate telepathically with them at a distance of up to 120ft."
        ]
    }, {
        card: "4",
        name: "Plant pot",
        type: "magicItems",
        subtype: "wonderousItems",
        desc: ["You can activate the hidden ability of this item to prevent or end combat. Creatures within 120ft. may not attack one another for 10 minutes and must all leave the area immediately, and travel as far as possible within that time. Once used this way the plant pot shatters and becomes a small decorative garden.",
            "While attuned to this item your alignment becomes neutral. Your ideals and motives shift in line with your new personality."
        ]
    }, {
        card: "5",
        name: "Ominous looking cloak",
        type: "magicItems",
        subtype: "wonderousItems",
        desc: ["You fully believe that you now add twice your proficiency bonus to intimidation checks. You do not.",
            "You are immune to fear and being charmed for as long as you believe the cloak works."
        ]
    }, {
        card: "6",
        name: "A magnifying glass.",
        type: "magicItems",
        subtype: "wonderousItems",
        desc: ["Through this glass you can witness events in an area up to 1 month in the past. You can exceed this distance but must succeed on a Wisdom save of DC 6 + the number of additional months or gain a long-term madness, and the glass is dropped and broken.",
        ]
    }, {
        card: "7",
        name: "A branching twig that shimmers like a seashell",
        type: "magicItems",
        subtype: "wonderousItems",
        desc: ["You can use this item when hiding or being pursued, whenever a creature following you or looking for you is presented with a decision it must succeed on a Wis save or make the wrong choice. This may include choosing which direction to turn at a junction, which door to look behind, or box to look in.",
        ]
    }, {
        card: "8",
        name: "Birdcage",
        type: "magicItems",
        subtype: "wonderousItems",
        desc: ["You can place your familiar inside the birdcage and snap it flat, in so doing you can create 3 copies of the familiar in spaces within 30ft. of you. They last for up to 10 minutes.",
            "The familiars appear with up to three of the following spells upon them:",
            "Bless",
            "Enlarge/Reduce (enlarge only)",
            "Heroism",
            "Enhance Ability",
            "Haste",
            "Awaken",
            "Once you have used this ability you must re-summon your familiar. Doing so requires a level 2 spell slot if you summon it the same day.",
        ]
    }, {
        card: "9",
        name: "A pair of earrings, one gold, one iron, but matching.",
        type: "magicItems",
        subtype: "wonderousItems",
        desc: ["You gain one use of the Wish spell.",
            "You gain one limited Wish (recreate a 6th level spell or lower and take a level of exhaustion).",
            "Once used both of these earrings are destroyed and you lose half of your maximum hit points.",
        ]
    }, {
        card: "10",
        name: "Urn",
        type: "magicItems",
        subtype: "wonderousItems",
        desc: ["The urn is refilled each day at dawn with a fine wine, enough to serve up to 20 people. Each creature who drinks a cup of wine recovers 2d20 hit points, and gains the benefit of Lesser Restoration.",
            "For 1 hour after drinking the wine, you have advantage on persuasion checks made to influence and befriend anyone else who has drunk in that time."
            ,]
    }, {
        card: "Page",
        type: "magicItems",
        subtype: "wonderousItems",
        name: "Ring of Conjuring a Fish",
        desc: ["Roll 1d10",
            "1 - You have a fish, you will eat for a day",
            "2 - You permanently gain proficiency in fishing tools",
            "3 - You become a fish, this can be reversed at any time by killing the fish",
            "4 - You become a landfish, or ferret, if you will",
            "5 - You gain three loaves of bread and three fish, you can feed up to 1000 people for 1 day.",
            "6 - You summon a fish golem, a humanoid figure made of fish. It is not particularly useful or edible.",
            "7 - You summon a wish fish, it will grant you 1 wish if you can speak with animals, otherwise, it just looks and sounds like a normal fish",
            "8 - You gain gills that allow you to swim through water for an hour",
            "9 - You gain Gills that will sell you car insurance. You do not own a car, get out of here Gill!",
            "10 - You summon a whale, that is not a fish, this ring must be broken! The ring breaks",
            ,]
    }, {
        card: "Knight",
        type: "magicItems",
        subtype: "wonderousItems",
        name: "The Invisible Crown",
        desc: ["You can assume an aspect of authority that is irresistible to a random race (determined by the DM). All members of that race that you encounter are charmed by you and will obey your orders so long as they do not result in the creature’s self-destruction or reckless endangerment. If a creature attempts to defy your orders they must succeed on a DC 18 Cha saving throw first.",
            ,]
    }, {
        card: "Queen",
        type: "magicItems",
        subtype: "wonderousItems",
        name: "Compass?",
        desc: ["You can pair this compass with up to 10 creatures with which you are familiar. At any time one of those creatures can indicate that they are in great distress, doing so will trigger the compass to ring an alarm and to point in their direction. If that creature falls below 0 hit points the effect also triggers.",
            "The compass can be used across planes and once per day can cast planeshift to guide you to a creature in distress. If the ability has been used already the compass will guide you along the shortest route to the distressed creature via available portals or powerful spell casters."
            ,]
    }, {
        card: "King",
        type: "magicItems",
        subtype: "wonderousItems",
        name: "A hedge maze in the gardens of a keep, castle, or manor house",
        desc: ["The hedge maze is protected by 20 knights, they are all anthropoid hedgehogs.",
            "Travelling through the hedge maze can lead to one of the following locations with a successful DC 17 Int check",
            "A witches hut",
            "An allied castle or manor house",
            "A safe location in Bitopia",
            "An arcane library",
            "A wine cellar"
        ]
    }, {
        card: "The Fool",
        name: "The Fool",
        type: "magicItems",
        subtype: "miscItems",
        desc: [
            "A small totem of a god depicted with an oversized head that is loosely attached via a springy piece of metal. The head wobbles while the vehicle is in motion.",
            "Once per day when you travel and experience a random encounter, you can choose to bobble the head, and the encounter changes to something else.",
            "If you find this item there is a 1% chance of finding Tiamat, who has 5 heads. You can use the bobble head to change fate up to five times, including changing the same encounter all five times. However, if you attempt to change five encounters in a 1 week period, the DM chooses the worst possible encounter, or simply has an adult or older dragon attack the party.",
        ]
    }, {
        card: "The Magician",
        name: "Danglies",
        type: "magicItems",
        subtype: "miscItems",
        desc: [
            "An ornament to be hung wherever they will cause the most distraction. They come in many shapes and sizes and confer a variety of effects:",
            "Fluffy dice - 1/day you can reroll any dice related to the handling of the vehicle.",
            "Disco ball - The vehicle has advantage on saving throws against magical effects",
            "Pine tree - The vehicle always smells pleasantly (or unpleasantly) of pine. Perception checks made to smell have disadvantage.",
            "Jelly bean - The vehicle smells obnoxiously sweet. No creature can have advantage on any check made to resist charm while on board.",
            "Holy symbol - Undead must succeed on a Wisdom save (DC 15) before attempting to board or attack the vehicle, or be turned for 1 minute.",
            "Boblin the Goblin - It’s Boblin, please master, cut him down, he’s strangling to death."
        ]
    }, {
        card: "The High Priestess",
        name: "Training Wheels",
        type: "magicItems",
        subtype: "miscItems",
        desc: [
            "A creature who does not have proficiency in land vehicles can affix these training wheels. For the next 1d12+6 days they can add half their proficiency modifier to any checks made to pilot the vehicle, and at the end of this period they can make an Intelligence check (DC 15) to gain proficiency in land vehicles permanently. If they succeed the training wheels disappear.",
        ]
    }, {
        card: "The Empress",
        name: "Flag",
        type: "magicItems",
        subtype: "miscItems",
        desc: [
            "A banner of the most vibrant green. Creatures that spend at least 24 hours crewing the ship gain the ability to add 1d6 acid damage to attacks made with any weapon with which they are proficient.",
            "Cannons, ballistae and other large weapons that are affixed to the ship for 24 hours also gain this ability, except that the damage is increased to 2d6.",
            "Water surrounding the ship is acidic, and creatures swimming alongside must succeed on a DC 12 Con save or be poisoned for 1 hour."
        ]
    }, {
        card: "The Emperor",
        name: "Captain’s Chair",
        type: "magicItems",
        subtype: "miscItems",
        desc: [
            "You can install this chair into any vehicle that requires a crew of 5 or more creatures to pilot. If you do, after 24 hours the crew requirement is reduced by 20% so long as one of the crew is seated in the chair at all times.",
            "Whenever you encounter a new landmass that has no resident intelligent creatures, you can name the landmass."
        ]
    }, {
        card: "The Hierophant",
        name: "Fin of the Marid",
        type: "magicItems",
        subtype: "miscItems",
        desc: [
            "This heavy wooden oar has a very organic looking fin as its paddle, and is designed to be drawn by two people alongside a larger rowing team. This oar alone is required to propel a vessel that would otherwise require 20 or fewer crewmembers to pilot so long as it has two creatures using it whose strength is 15 or higher.",
            "Over the course of 1 hour the boat will drift too far in one direction requiring that the oar’s users switch sides."
        ]
    }, {
        card: "The Lovers",
        name: "The Dream Web",
        type: "magicItems",
        subtype: "miscItems",
        desc: [
            "This dreamcatcher is heavily jewelled and ornamented, and is webbed with string so fine as to be nearly invisible. Once it has been hung from a vehicle for an hour or more, any creature who attempts to scry on anyone in or within 10ft of the vehicle fails and takes 1d6 psychic damage for the trouble.",
            "A bell attached to the Dream Web jingles if a creature on the ethereal plane comes within 30ft of the vehicle."
        ]
    }
    , {
        card: "The Chariot",
        name: "Vellum of the Navigator",
        type: "magicItems",
        subtype: "miscItems",
        desc: [
            "A star chart beautifully painted onto fine vellum and set into a frame designed to be attached to furniture such as a table or more likely incorporated into a large vehicle. Once the vellum has been attached to a vehicle for 24 hours anyone attempting to navigate that vehicle cannot become lost during the hours of night.",
            "In addition the vehicle can cast Planeshift (regaining the ability at midnight 1d4 days later), taking all of its crew safely to a location on a plane of the captain/navigator's choosing. The navigator can easily become lost if the vehicle is on a plane that lacks a sky (such as the Elemental Plane of Earth)."
        ]
    }, {
        card: "Strength",
        name: "The Majestic as hell Cape",
        type: "magicItems",
        subtype: "miscItems",
        desc: [
            "This purple cape with silver embroidery can only be worn by a creature that is suitable for use as a mount. The mount can use its reaction in response to initiative being rolled to cause all creatures not currently riding it to make a Charisma saving throw. On a failure the creature is awed by the mount.",
            "An awed creature is afraid of and charmed by the mount and its rider, and whenever the mount is within 10ft of the creature when it starts its turn it must spend its action grovelling and pleading for mercy.",
            "A creature that cannot see the mount can repeat this saving throw at the end of its turns."
        ]
    }, {
        card: "The Hermit",
        name: "Smoke Trail",
        type: "magicItems",
        subtype: "miscItems",
        desc: [
            "While on board you can cause the airship you are on to leave a trail of smoke in the sky behind it. The smoke trail lasts for 10 days, and is only visible to creatures you designate. You may choose specific individuals, a specific creature type, or a condition such as “those who bear the banner of Lord Bedegar”.",
            "Any creature that can see the smoke trail knows the direction in which the airship travels.",
            "You can alter the colour of the smoke at any time during flight."
        ]
    }, {
        card: "The Wheel of Fortune",
        name: "Wheel of Fortune",
        type: "magicItems",
        subtype: "miscItems",
        desc: [
            "This wheel is hung with an absurd number of lucky charms and tokens. Any creature who rides in a vehicle that has had the Wheel of Fortune affixed to it has 1 luck point to use this day. If more than 6 creatures expend their luck points in 24 hours, the wheel disappears and finds more grateful users.",
        ]
    }, {
        card: "Justice",
        name: "Trailing Cans",
        type: "magicItems",
        subtype: "miscItems",
        desc: [
            "A bag filled with about 13 empty food cans, each of which is attached to a piece of string. While these cans are affixed to a vehicle, checks made to look for the vehicle have advantage.",
            "While on board, creatures have an actively boosted morale. Creatures you choose cannot be charmed or frightened while on board, and gain resistance to psychic damage. You may designate other creatures as they come on board that need to succeed on a DC 15 Wisdom save or be charmed by the vehicle. While charmed in this way, the creature cannot harm the vehicle or its inhabitants. The effect lasts until the vehicle cannot be seen by the charmed creature."
        ]
    }, {
        card: "Hanged Man",
        name: "The Life Line",
        type: "magicItems",
        subtype: "miscItems",
        desc: [
            "The spell identify determines that this is a Rope of Climbing but if taken aboard a vehicle it has a secondary property that can only be discovered by either casting Legend Lore, or identifying the rope while on board.",
            "If you fall off a vehicle while this rope is on your person, it will immediately react to pull you to safety."
        ]
    }, {
        card: "Death",
        name: "The Leering Navigator",
        type: "magicItems",
        subtype: "miscItems",
        desc: [
            "This skull has no magical properties until it is affixed to a vehicle of any kind. Once it is in place and the vehicle is travelling, the skull can inform the pilot of all properties of their vehicle, and will warn the pilot when the vehicle gets to within 1 mile of where it is destined to be destroyed.",
            "The skull berates the pilot whenever they fail to navigate correctly, or fail any attempt at successfully piloting the vehicle, or managing their crew. If, in any voyage the pilot amasses three such failures, they gain the following flaw:",
            "“I have lost all confidence in my ability to drive”",
            "If a failure causes the vehicle to take damage, the skull loses a tooth. After three such teeth have been lost, the skull’s speech become indecipherable, and none of its properties will function until the pilot replaces them with their own teeth."
        ]
    }, {
        card: "Temperance",
        name: "The Record",
        type: "magicItems",
        subtype: "miscItems",
        desc: [
            "This book is inherently tied to a vehicle. It keeps a perfect and up-to-date record of all events taking place within the vehicle and up to 60ft. around it. Any creature can spend up to 1 hour reading the Record to gain 1d10 that can be applied to any ability check or saving throw in the same 24 hour period.",
            "The Record can also be monitored carefully for details that have eluded the crew. Perception checks made by the crew while the captain monitors the Record have advantage.",
            "If the Record is attached to a new vehicle it is immediately wiped clean of any previous information and begins anew, but it gains a velvet bookmark. The bookmark can be activated to read the complete Record concerning that vehicle."
        ]
    }, {
        card: "The Devil",
        name: "Mole’s Nose",
        type: "magicItems",
        subtype: "miscItems",
        desc: [
            "The oversized spade head is affixed to the front of any land going vehicle ahead of any creatures that draw the vehicle along. After 24 hours the vehicle gains a burrow speed of 15ft. The spade head clears a 5ft. wide path through any terrain, and can be used to dig through any terrain that is not solid rock.",
        ]
    }, {
        card: "The Tower",
        name: "The Palanquin",
        type: "magicItems",
        subtype: "miscItems",
        desc: [
            "This miniature tower of wood and cloth can be affixed to the back of any mount that is Huge or larger. On the inside the tower is a large stone structure that has 3 floors, each 20ft wide and 10ft high, and furnished lightly to fit up to 10 creatures in close quarters.",
            "Atop the tower, creatures have cover from attacks below, and creatures have line of sight to creatures below and around the mount. You may choose whether the top of the tower is 30ft above the back of your mount, or 5ft when you exit through the top of the tower."
        ]
    }, {
        card: "The Star",
        name: "The Figurecrab",
        type: "magicItems",
        subtype: "miscItems",
        desc: [

            "This wooden figurehead is in the shape of a crab, and yet somehow still oddly alluring to the eye. The captain of the vessel which has the Figurecrab attached can command the crab to grab any object immediately in front of it. The crab has a Strength of 27 and proficiency (+4) with simple and martial melee weapons.",
            "The mouthparts of the crab conceal a bag of holding which can only store water and sand. The contents of the mouthparts can be projected once per day as a 120ft. cone, all creatures within the cone must succeed on a DC 20 Strength save or take 4d8 bludgeoning damage and be knocked prone."
        ]
    }, {
        card: "The Moon",
        name: "The Horn",
        type: "magicItems",
        subtype: "miscItems",
        desc: [
            "The shell of a vast snail turned into a tuba-like instrument that can only be used when mounted onto a vehicle. When blown, all creatures in a line as wide as the vehicle is, and ten times as long must succeed on a Wisdom saving throw (DC 20) to be moved harmlessly to the side of the area. Any creature still in the area must succeed on a DC 20 Dexterity saving throw or be knocked prone.",
            "A creature hit by a vehicle that has the horn mounted to it has its speed reduced to 5ft for 1 minute."
        ]
    }, {
        card: "The Sun",
        name: "The Sleepers Guide",
        type: "magicItems",
        subtype: "miscItems",
        desc: [
            "This cushion can be applied to any saddle or seat in a vehicle. While you pilot a vehicle or ride a mount you may take a long rest, while doing so you take no penalties to navigating or manoeuvring your mount/vehicle, and you remain aware at all times.",
            "In addition you can choose to have the mount/vehicle enter the plain of dreams at any time. It leaves again when you complete your long rest."
        ]
    }, {
        card: "Judgement",
        name: "The Network",
        type: "magicItems",
        subtype: "miscItems",
        desc: [
            "In any vehicle capable of transporting 10 or more creatures there is a 1% chance that there is a permanently affixed sending stone. The stones are combined, and talking into any one relays a message to all of the other stones, and allows for unlimited communication.",
            "If any creature announces their identity into the stone, it is replaced with a nickname chosen by The Network, and spoken in that creature’s own voice. The creature is aware of this process and the nickname created."
        ]
    }, {
        card: "The World",
        name: "All Terrain Seal",
        type: "magicItems",
        subtype: "miscItems",
        desc: [
            "A metal plate bearing a mark approving “this vehicle” as suitable for any terrain. When applied to any land vehicle for 24 hours or more, the vehicle can consider any horizontal surface as suitable terrain for it to pass unharmed, so long as there are no other obstacles. For example, the vehicle could treat a calm sea as if it were rough ground, a narrow plank as if it were a sturdy bridge, and a flow of lava as if it were normal, solid rock.",
            "Walls and other obstacles remain as hindrances."
        ]
    }
];

import { outputJson } from './utils/dataParsing.js';
outputJson("magicItems", items);


const collections = {
    "documentType": "magicItems",
    "collections": ["itemsOfMagic", "cursedItems", "miscItems", "wonderousItems", "itemsForCombat"]
}